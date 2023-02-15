describe('visits main page', () => {
  it('should have joke container component', () => {
    cy.visit('http://localhost:3000/');
    cy.getByData('joke-container').should('exist');
  });
});
