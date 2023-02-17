import JokeContainer from '../JokeContainer/JokeContainer';
import './JokeCardContainer.css';

const JokeCardContainer = () => {
  return (
    <div className="joke-card-container" data-test="joke-card-container">
      <div className="joke-card-container-side-bar"></div>
      <JokeContainer />
    </div>
  );
};

export default JokeCardContainer;
