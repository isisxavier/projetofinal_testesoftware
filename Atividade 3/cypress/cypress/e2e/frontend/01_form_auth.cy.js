/// <reference types="cypress" />

describe('Form Authentication', () => {
  it('Login válido e logout', () => {
    cy.visit('/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.contains('You logged into a secure area!').should('be.visible');
    cy.get('.icon-2x').contains('Logout').click();
    cy.contains('You logged out of the secure area!').should('be.visible');
  });
});
