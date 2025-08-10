describe('Infinite Scroll', () => {
  it('Scroll até carregar mais conteúdo', () => {
    cy.visit('/infinite_scroll');
    cy.window().then(win => {
      for (let i=0; i<5; i++) win.scrollTo(0, document.body.scrollHeight);
    });
    cy.get('.jscroll-added').its('length').should('be.gte', 1);
  });
});
