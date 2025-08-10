describe('Dynamic Controls', () => {
  it('Habilita input e adiciona/remover checkbox', () => {
    cy.visit('/dynamic_controls');
    cy.contains('Remove').click();
    cy.contains("It's gone!").should('be.visible');
    cy.contains('Add').click();
    cy.contains("It's back!").should('be.visible');
    cy.contains('Enable').click();
    cy.contains("It's enabled!").should('be.visible');
    cy.get('input[type=text]').type('hello');
  });
});
