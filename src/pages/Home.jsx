import Hero from "../components/Hero";
import mainImg from "../assets/girlCoding.jpg";
import "../App.css";

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
    </div>
  );
};

export default Home;
