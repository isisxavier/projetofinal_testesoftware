// Custom commands or hooks
import Ajv from 'ajv';

Cypress.Commands.add('validateSchema', (data, schema) => {
  const ajv = new Ajv({ allErrors: true, strict: false });
  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (!valid) {
    throw new Error('Schema validation failed: ' + JSON.stringify(validate.errors, null, 2));
  }
});
