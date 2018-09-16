describe('Given a dashboard page', () => {

  describe('When a user visits the Dashboard page', () => {

    it('it displays the project name', () => {
      cy.visit(`http://localhost:3000/dashboard`);
      cy.get('.brand').contains('footage-catalogue');
    });

    it('displays the word Videos', () => {
      cy.visit(`http://localhost:3000/dashboard`);
      cy.contains('Videos');
    });
  });
});
