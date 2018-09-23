describe('Given a dashboard page', () => {
  const API_URL = `http://localhost:${Cypress.env( 'API_PORT' )}/dashboard`;

  describe('When a user visits the Dashboard page', () => {

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
