/// <reference types="cypress" />

describe('FakeRest API — 10 cenários + schema', () => {
  const api = Cypress.env('apiBaseUrl');

  it('1) GET /api/v1/Books retorna 200 e valida schema (lista)', () => {
    cy.fixture('schemas/books.json').then((schema) => {
      cy.request(`${api}/api/v1/Books`).then((res) => {
        expect(res.status).to.eq(200);
        cy.validateSchema(res.body, schema);
        expect(res.body.length).to.be.greaterThan(0);
      });
    });
  });

  it('2) GET /api/v1/Books/1 retorna 200 e valida schema (item)', () => {
    cy.fixture('schemas/book.json').then((schema) => {
      cy.request(`${api}/api/v1/Books/1`).then((res) => {
        expect(res.status).to.eq(200);
        cy.validateSchema(res.body, schema);
        expect(res.body).to.have.property('id', 1);
      });
    });
  });

  it('3) POST /api/v1/Books cria com sucesso (201)', () => {
    const payload = {
      id: 999999,
      title: "Cypress Book",
      description: "Created by Cypress",
      pageCount: 123,
      excerpt: "Excerpt",
      publishDate: new Date().toISOString()
    };
    cy.request('POST', `${api}/api/v1/Books`, payload).then((res) => {
      expect(res.status).to.be.within(200, 201);
      expect(res.body).to.include({ id: payload.id, title: payload.title });
    });
  });

  it('4) PUT /api/v1/Books atualiza com sucesso (200)', () => {
    const payload = {
      id: 999999,
      title: "Cypress Book Updated",
      description: "Updated",
      pageCount: 200,
      excerpt: "Excerpt",
      publishDate: new Date().toISOString()
    };
    cy.request('PUT', `${api}/api/v1/Books/999999`, payload).then((res) => {
      expect(res.status).to.be.within(200, 204);
    });
  });

  it('5) DELETE /api/v1/Books remove com sucesso (200/204)', () => {
    cy.request('DELETE', `${api}/api/v1/Books/999999`).then((res) => {
      expect([200,204]).to.include(res.status);
    });
  });

  it('6) GET inexistente retorna 404', () => {
    cy.request({ url: `${api}/api/v1/Books/0`, failOnStatusCode: false }).then((res) => {
      expect(res.status).to.eq(404);
    });
  });

  it('7) GET /api/v1/Authors valida schema', () => {
    cy.fixture('schemas/author.json').then((schema) => {
      cy.request(`${api}/api/v1/Authors/1`).then((res) => {
        expect(res.status).to.eq(200);
        cy.validateSchema(res.body, schema);
      });
    });
  });

  it('8) GET /api/v1/Activities valida schema', () => {
    cy.fixture('schemas/activity.json').then((schema) => {
      cy.request(`${api}/api/v1/Activities/1`).then((res) => {
        expect(res.status).to.eq(200);
        cy.validateSchema(res.body, schema);
      });
    });
  });

  it('9) Verifica headers e tempo de resposta < 2s', () => {
    cy.request(`${api}/api/v1/Books`).then((res) => {
      expect(res.headers).to.have.property('content-type');
      expect(res.duration).to.be.lessThan(2000);
    });
  });

  it('10) Valida paginação/slice (quando disponível)', () => {
    // Exemplo básico: filtra e valida retorno não-vazio
    cy.request(`${api}/api/v1/Books`).then((res) => {
      const filtered = res.body.filter(b => b.pageCount >= 100);
      expect(filtered.length).to.be.greaterThan(0);
    });
  });
});
