describe('Given a Videos page', () => {

  describe('When a user visits the Vidoes page', () => {
    
    it('it displays the project name', () => {
      cy.visit(`http://localhost:3000/videos`);
      cy.get('.brand').contains('footage-catalogue');
    });

    it('displays the word Videos', () => {
      cy.visit(`http://localhost:3000/videos`);
      cy.contains('Videos');
    });
  });
});
