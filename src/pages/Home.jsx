import Hero from "../components/Hero";
import mainImg from "../assets/girlCoding.jpg";
import "../App.css";
import { ExperienceCard } from "../components/ExperienceCard";
import { ContactArea } from "../components/ContactArea";

export const Home = () => {
  const aboutMe =
    "I'm highly proficient in frontend and backend devolopment for simple to complex scalable web apps. I've had the pleasure of working for startups and huge organizations. Check out my blog for my perspective on those experiences. Want to know how I may help your project? Check out my portfolio and resume then reach out.";

  return (
    <div className="home-page">
      <Hero
        greeting="Hi"
        name="Javay Porter"
        title="Software Engineer"
        buttonTextA=" Resume"
        buttonTextB="Contact"
        mainImg={mainImg}
      />
      <div className="experience">
        <ExperienceCard />
        <ContactArea
          cityState="Lanham, MD"
          phone="(202)-590-9878"
          email="porter.javay@gmail.com"
        />
      </div>
    </div>
  );
};
