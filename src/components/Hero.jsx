import { Button } from "react-bootstrap";
import "../stylesheets/Hero.css";

const Hero = ({ greeting, name, title, buttonTextA, buttonTextB, mainImg }) => {
  return (
    <div className="hero__container">
      <div className="hero-left">
        <h3>{`${greeting},`}</h3>
        <h1>{`I'm ${name}`}</h1>
        <h2>{`I am a ${title}`}</h2>
        <div className="button-container">
          <Button className="fancy-button">{buttonTextA}</Button>
          <Button>{buttonTextB}</Button>
        </div>
      </div>
      <div className="hero-right">
        <img src={mainImg} alt={name} />
      </div>
    </div>
  );
};

export default Hero;
