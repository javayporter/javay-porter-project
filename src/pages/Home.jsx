import Hero from "../components/Hero";
import mainImg from "../assets/girlCoding.jpg";
import "../App.css";
import Experience from "./Experience";
import ExperienceCard from "../components/ExperienceCard";

const Home = () => {
  return (
    <div className="home-page">
      <Hero
        greeting="Hi"
        name="Javay Porter"
        title="Software Engineer"
        buttonTextA="Resume"
        buttonTextB="Contact"
        mainImg={mainImg}
      />
      <div className="experience">
        <ExperienceCard />
      </div>
    </div>
  );
};

export default Home;
