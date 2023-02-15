describe('visits main page', () => {
  it('should pass', () => {
    cy.visit('http://localhost:3000/');
  });
  it('should have home and joke container components', () => {
    cy.visit('http://localhost:3000/');
    cy.getByData('home-container').should('exist');
    cy.getByData('joke-card-container').should('exist');
  });
});
