import JokeCardContainer from '../../src/components/JokeCardContainer';

describe('JokeCardContainer.cy.tsx', () => {
  it('should contain the joke container', () => {
    cy.mount(<JokeCardContainer />);
    cy.getByData('joke-container').should('exist');
  });
});
