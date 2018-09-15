describe('Given a landing page', () => {
  const HOST = Cypress.env('TARGET_HOST');
  const PORT = Cypress.env('TARGET_PORt');

  describe('when a user visits the landing page', () => {
    it('displays the project name', () => {
      cy.visit(`http://${HOST}:${PORT}/`);
      cy.get('.brand').contains('footage-catalogue');
    });
  });
});
