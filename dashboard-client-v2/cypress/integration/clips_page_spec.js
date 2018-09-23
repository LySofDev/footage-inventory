describe('Given a Clips page', () => {

  describe('When a user visits the Vidoes page', () => {

    it('it displays the project name', () => {
      cy.visit(`http://localhost:4321/clips`);
      cy.get('.brand').contains('footage-catalogue');
    });

    it('displays the word Clips', () => {
      cy.visit(`http://localhost:4321/Clips`);
      cy.contains('Clips');
    });
  });
});
