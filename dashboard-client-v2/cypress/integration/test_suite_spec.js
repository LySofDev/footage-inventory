describe( 'Given a test suite', () => {

  describe( 'When connecting to the API', () => {

    it( 'Should have a PORT value', () => {
      expect( Cypress.env( 'API_PORT' ) ).to.eq( 4321 );
    } );

  } );

} );
