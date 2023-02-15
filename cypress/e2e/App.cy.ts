describe('visits main page', () => {
  it('should pass', () => {
    cy.visit('http://localhost:3000/');
  });
  it('should have home container component', () => {
    cy.visit('http://localhost:3000/');
    cy.getByData('home-container').should('exist');
  });
});
