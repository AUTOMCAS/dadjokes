import JokeContainer from '../../src/components/JokeContainer/JokeContainer';
import randomJokeFixture from '../fixtures/random-joke.json';

describe('JokeContainer.cy.tsx', () => {
  it('should contain the joke element', () => {
    cy.intercept('GET', 'https://icanhazdadjoke.com/', {
      fixture: 'random-joke.json',
    }).as('getRandomJoke');

    cy.mount(<JokeContainer />);
    cy.wait('@getRandomJoke');

    cy.getByData('joke-container').should('exist');
    cy.getByData('joke-container').should(
      'contain',
      `${randomJokeFixture.joke}`,
    );
  });
});
