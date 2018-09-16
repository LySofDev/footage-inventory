describe('Given a Clips page', () => {

  describe('When a user visits the Vidoes page', () => {

    it('it displays the project name', () => {
      cy.visit(`http://localhost:3000/clips`);
      cy.get('.brand').contains('footage-catalogue');
    });

    it('displays the word Clips', () => {
      cy.visit(`http://localhost:3000/Clips`);
      cy.contains('Clips');
    });
  });
});
