// CommonJS + paths robustos + mensagens claras
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

const ROOT = path.resolve(__dirname, '..'); // data-pipeline/
const SCHEMA_PATH = path.join(ROOT, 'schema.json');
const CSV_PATH = path.join(ROOT, 'dataset.csv');

function mustReadFile(p) {
  if (!fs.existsSync(p)) {
    throw new Error(`Arquivo não encontrado: ${p}`);
  }
  return fs.readFileSync(p, 'utf-8');
}

let schema;
let csvText;
let records;

beforeAll(() => {
  try {
    const schemaText = mustReadFile(SCHEMA_PATH);
    schema = JSON.parse(schemaText);
  } catch (e) {
    // força falhar de forma explícita se nem carregar o schema/CSV
    throw new Error(`Falha ao carregar schema.json: ${e.message}`);
  }

  try {
    csvText = mustReadFile(CSV_PATH);
  } catch (e) {
    throw new Error(`Falha ao carregar dataset.csv: ${e.message}`);
  }

  try {
    records = parse(csvText, { columns: true, skip_empty_lines: true });
  } catch (e) {
    throw new Error(`Falha ao parsear CSV: ${e.message}`);
  }
});

function validateRecord(record, schema) {
  const errors = [];

  // 1) Campos + tipos + restrições
  schema.fields.forEach((f) => {
    const val = record[f.name];

    if (f.required && (val === undefined || val === null || val === '')) {
      errors.push(`Campo obrigatório ausente: ${f.name}`);
      return;
    }

    if (f.type === 'integer') {
      const n = Number(val);
      if (!Number.isInteger(n)) errors.push(`Campo ${f.name} não é inteiro`);
      if (f.min !== undefined && n < f.min) errors.push(`Campo ${f.name} menor que min`);
      if (f.max !== undefined && n > f.max) errors.push(`Campo ${f.name} maior que max`);
    } else if (f.type === 'boolean') {
      const s = String(val);
      if (!['true', 'false'].includes(s)) errors.push(`Campo ${f.name} não é booleano`);
    } else if (f.type === 'string' && f.pattern) {
      const re = new RegExp(f.pattern);
      if (!re.test(String(val))) errors.push(`Campo ${f.name} não segue o padrão`);
    }
  });

  return errors;
}

describe('Pipeline de Dados — 10 cenários', () => {
  test('1) Schema de colunas correto', () => {
    const header = Object.keys(records[0]);
    const expected = schema.fields.map((f) => f.name);
    expect(header).toEqual(expected);
  });

  test('2) Tipos e limites (age)', () => {
    const ages = records.map((r) => Number(r.age));
    expect(Math.min(...ages)).toBeGreaterThanOrEqual(0);
    expect(Math.max(...ages)).toBeLessThanOrEqual(120);
  });

  test('3) E-mails válidos (regex)', () => {
    const emailField = schema.fields.find((f) => f.name === 'email');
    const re = new RegExp(emailField.pattern);
    records.forEach((r) => expect(re.test(r.email)).toBe(true));
  });

  test('4) Datas no formato YYYY-MM-DD', () => {
    const re = /^\d{4}-\d{2}-\d{2}$/;
    records.forEach((r) => expect(re.test(r.signup_date)).toBe(true));
  });

  test('5) is_active booleano', () => {
    records.forEach((r) => expect(['true', 'false'].includes(String(r.is_active))).toBe(true));
  });

  test('6) IDs únicos', () => {
    const ids = records.map((r) => r.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  test('7) E-mails únicos', () => {
    const emails = records.map((r) => r.email);
    expect(new Set(emails).size).toBe(emails.length);
  });

  test('8) Campos obrigatórios presentes (validação completa por registro)', () => {
    records.forEach((r) => expect(validateRecord(r, schema)).toHaveLength(0));
  });

  test('9) Mínimo de 5 linhas', () => {
    expect(records.length).toBeGreaterThanOrEqual(5);
  });

  test('10) Consistência: is_active=true precisa ter signup_date preenchida', () => {
    records
      .filter((r) => String(r.is_active) === 'true')
      .forEach((r) => expect(Boolean(r.signup_date)).toBe(true));
  });
});
