describe('Given a landing page', () => {
  const API_URL = `http://localhost:${Cypress.env( 'API_PORT' )}`;

  describe('when a user visits the landing page', () => {

    it('displays the project name', () => {
      cy.visit(API_URL);
      cy.get('.brand').contains('footage-catalogue');
    });
  });
});
