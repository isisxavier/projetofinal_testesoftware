describe('Dropdown', () => {
  it('Seleciona opções', () => {
    cy.visit('/dropdown');
    cy.get('#dropdown').select('Option 1').should('have.value','1');
    cy.get('#dropdown').select('Option 2').should('have.value','2');
  });
});
