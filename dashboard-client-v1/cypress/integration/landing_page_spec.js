describe('Given a landing page', () => {
  describe('when a user visits the landing page', () => {

    it('displays the project name', () => {
      cy.visit(`http://localhost:3000`);
      cy.get('.brand').contains('footage-catalogue');
    });
  });
});
