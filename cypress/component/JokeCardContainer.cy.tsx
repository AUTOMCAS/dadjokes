import JokeCardContainer from '../../src/components/JokeContainer';

describe('JokeContainer.cy.tsx', () => {
  it('should contain the joke element', () => {
    cy.mount(<JokeCardContainer />);
    cy.getByData('joke').should('exist');
  });
});
