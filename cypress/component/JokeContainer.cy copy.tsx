import JokeContainer from '../../src/components/JokeContainer';

describe('JokeContainer.cy.tsx', () => {
  it('should contain the joke element', () => {
    cy.mount(<JokeContainer />);
  });
});
