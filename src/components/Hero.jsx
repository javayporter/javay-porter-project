import { Button } from "react-bootstrap";
import "../stylesheets/Hero.css";
import jpResume from "../assets/JavayPorterResume_2023.pdf";

const Hero = ({ greeting, name, title, buttonTextA, buttonTextB, mainImg }) => {
  const showContact = () => {
    const contactArea = document.querySelector("#contact-area");
    contactArea.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero__container">
      <div className="hero-left">
        <h3>{`${greeting},`}</h3>
        <h1>
          I'm <span className="special-word">{name}</span>
        </h1>
        <h2>{`I am a ${title}`}</h2>
        <div className="button-container">
          <a href={jpResume} download>
            <Button className="resume-button">{buttonTextA}</Button>
          </a>
          <Button className="contact-button" onClick={() => showContact()}>
            {buttonTextB}
          </Button>
        </div>
      </div>
      <div className="hero-right">
        <img src={mainImg} alt={name} />
      </div>
    </div>
  );
};

export default Hero;
