describe('Hovers', () => {
  it('Exibe caption ao passar o mouse', () => {
    cy.visit('/hovers');
    cy.get('.figure').first().trigger('mouseover');
    cy.get('.figcaption').first().should('be.visible');
  });
});
