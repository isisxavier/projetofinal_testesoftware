describe('Notification Messages', () => {
  it('Verifica mensagens randômicas', () => {
    cy.visit('/notification_message_rendered');
    cy.contains('Click here').click();
    cy.get('#flash').should('be.visible')
      .and(($el)=>{
        expect($el.text()).to.match(/Action successful|Action unsuccesful, please try again/);
      });
  });
});
