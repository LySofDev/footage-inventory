describe('Given a Clips page', () => {
  const API_URL = `http://localhost:${Cypress.env( 'API_PORT' )}/clips`;

  describe('When a user visits the Vidoes page', () => {

    it('it displays the project name', () => {
      cy.visit(API_URL);
      cy.get('.brand').contains('footage-catalogue');
    });

    it('displays the word Clips', () => {
      cy.visit(API_URL);
      cy.contains('Clips');
    });

  });
});
