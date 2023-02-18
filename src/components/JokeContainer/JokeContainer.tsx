import React, { useEffect, useState } from 'react';
import './JokeContainer.css';

const JokeContainer: React.FC = (): JSX.Element => {
  const [randomJoke, setRandomJoke] = useState<string>('');

  useEffect(() => {
    getRandomJoke();
  }, []);

  const getRandomJoke = async (): Promise<void> => {
    await fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        setRandomJoke(data.joke);
      });
  };

  return (
    <div className="joke-container" data-test="joke-container">
      <div>{randomJoke}</div>
      <button
        className="joke-container-button"
        data-test="joke-container-button"
        onClick={getRandomJoke}
      >
        Next...
      </button>
    </div>
  );
};

export default JokeContainer;
