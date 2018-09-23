describe('Given a landing page', () => {
  describe('when a user visits the landing page', () => {

    it('displays the project name', () => {
      cy.visit(`http://localhost:4321`);
      cy.get('.brand').contains('footage-catalogue');
    });
  });
});
