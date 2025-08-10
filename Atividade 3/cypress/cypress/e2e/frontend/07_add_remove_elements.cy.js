describe('Add/Remove Elements', () => {
  it('Adiciona e remove botões', () => {
    cy.visit('/add_remove_elements/');
    cy.contains('Add Element').click().click().click();
    cy.get('.added-manually').should('have.length', 3);
    cy.get('.added-manually').first().click();
    cy.get('.added-manually').should('have.length', 2);
  });
});
