import JokeCardContainer from '../JokeCardContainer/JokeCardContainer';
import './HomeContainer.css';

const HomeContainer = () => {
  return (
    <div className="home-container" data-test="home-container">
      <div className="x">
        <JokeCardContainer />
      </div>
    </div>
  );
};

export default HomeContainer;
