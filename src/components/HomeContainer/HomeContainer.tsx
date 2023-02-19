import JokeCardContainer from '../JokeCardContainer/JokeCardContainer';
import './HomeContainer.css';

const HomeContainer = () => {
  return (
    <div className="home-container" data-test="home-container">
      <div>
        <h1>CLICK NEXT FOR A NEW JOKE</h1>
      </div>
      <JokeCardContainer />
    </div>
  );
};

export default HomeContainer;
