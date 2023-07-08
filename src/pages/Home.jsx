import Summary from "../components/Summary.jsx";
import ExperienceCard from "../components/ExperienceCard.jsx";
import TextBox from "../components/TextBox.jsx";
import Hero from "../components/Hero.jsx";

const Home = () => {
    return (
        <div className="app__container-right">
          <div className="app__container-right__top">
            <Summary />
          </div>
          <div className="app__container-right__bottom">
            <TextBox />
            <div className="app__center-div">
            <Hero /> 
            </div>           
            <ExperienceCard />
          </div>
        </div>
    )
}

export default Home;