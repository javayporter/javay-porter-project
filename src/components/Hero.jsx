import LeftImage from "../assets/adiscs.png";
import "../stylesheets/Hero.scss";
const Hero = (props) => {
  return (
    <div className="h-main-container">
      <div className="left-image">
        <img src="" alt="left-image" />
      </div>
      <div className="intro-text">
        <div className="header">{props.header}</div>
        <div className="title">{props.title}</div>
        <div className="job">{props.job}</div>
      </div>
      <div className="right-left">
        <img src="" alt="right-image" />
      </div>
    </div>
  );
};
Hero.defaultProps = {
  header: "JAVAY PORTER",
  title: "Junior Software Engineer",
  job: "Redirect Health",
};

export default Hero;
