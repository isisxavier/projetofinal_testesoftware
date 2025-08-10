describe('Checkboxes', () => {
  it('Marca e desmarca checkboxes', () => {
    cy.visit('/checkboxes');
    cy.get('input[type="checkbox"]').first().check().should('be.checked');
    cy.get('input[type="checkbox"]').last().uncheck().should('not.be.checked');
  });
});
