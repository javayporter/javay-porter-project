import Summary from "../components/Summary.jsx";
import ExperienceCard from "../components/ExperienceCard.jsx";

const Home = () => {
    return (
        <div className="app__container-right">
          <div className="app__container-right__top">
            <Summary />
          </div>
          <div className="app__container-right__bottom">
            <ExperienceCard />
          </div>
        </div>
    )
}

export default Home;