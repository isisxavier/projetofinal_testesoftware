describe('File Upload', () => {
  it('Faz upload de arquivo', () => {
    cy.visit('/upload');
    const fileName = 'upload.txt';
    cy.writeFile(fileName, 'conteúdo de teste');
    cy.get('#file-upload').selectFile(fileName);
    cy.get('#file-submit').click();
    cy.contains('File Uploaded!').should('be.visible');
  });
});
