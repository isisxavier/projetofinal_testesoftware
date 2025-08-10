# Fábrica de Testes — Entrega Completa

## Conteúdo
- **Gestão da Execução (Mapa Mental)**: `planning/test_plan.mm` (FreeMind).
- **Testes de API (Cypress + AJV)**: `cypress/e2e/api/` com **10 cenários** e **validação de schema**.
- **Testes de Front-end (Cypress)**: `cypress/e2e/frontend/` com **10 cenários** para `the-internet.herokuapp.com`.
- **Pipeline de Dados (CSV + validação de schema + 10 cenários)**: `data-pipeline/` (Node + Jest).
- **Teste de Carga (JMeter .jmx)**: `load-test/fakerest_load_test.jmx` (+ README).

## Como rodar (resumo)
1. **Pré-requisitos**: Node 18+; Java (para JMeter, opcional se só quiser abrir o .jmx); JMeter 5.6+ instalado para executar o teste de carga.
2. **Cypress** (API + Front-end):  
   ```bash
   cd cypress
   npm i
   npx cypress run   # ou: npx cypress open
   ```
3. **Pipeline de Dados (Jest)**:  
   ```bash
   cd data-pipeline
   npm i
   npm test
   ```
4. **Teste de Carga**: abra o arquivo `.jmx` no JMeter e execute. Relatórios podem ser gerados via “Summary Report”/“Aggregate Report”..

