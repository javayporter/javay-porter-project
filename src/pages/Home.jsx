import Hero from "../components/Hero";
import mainImg from "../assets/girlCoding.jpg";

const Home = () => {
  return (
    <div className="">
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
