describe('visits main page', () => {
  it('should pass', () => {
    cy.visit('http://localhost:3000/');
  });
  it('should have home and joke container components', () => {
    cy.visit('http://localhost:3000/');
    cy.getByData('home-container').should('exist');
    cy.getByData('joke-card-container').should('exist');
  });
  it('should display a new joke when button is pressed', () => {
    cy.intercept('GET', 'https://icanhazdadjoke.com/').as('getRandomJoke');
    cy.visit('http://localhost:3000/');

    cy.wait('@getRandomJoke').then((interception: any) => {
      assert.isNotNull(interception.response.id, 'Initial API call has id');
    });

    cy.get('@getRandomJoke.all').should('have.length', 1);

    cy.getByData('joke-container-button').click();

    cy.get('@getRandomJoke.all').should('have.length', 2);
  });
});

// cy.wait('@getRandomJoke').then(console.log)
