describe('Given a Videos page', () => {
  const API_URL = `http://localhost:${Cypress.env( 'API_PORT' )}/videos`;

  describe('When a user visits the Vidoes page', () => {

    it('it displays the project name', () => {
      cy.visit(API_URL);
      cy.get('.brand').contains('footage-catalogue');
    });

    it('displays the word Videos', () => {
      cy.visit(API_URL);
      cy.contains('Videos');
    });
  });
});
