import "../stylesheets/Summary.css";
import photo from "../assets/jp-pic.png";
const Summary = (props) => {
const download_link = "https://970-cs-930966778004-default.cs-us-east1-pkhd.cloudshell.dev/files/download/?id=0a38d217-ee29-4e90-a16f-d03c27ad4627";
  return (
    <div className="summary__container">
      <div className="left">
        <div className="summary-text">
          <h1>{props.username}</h1>
          <h3>{props.title}</h3>
          <p>{props.summary}</p>
        </div>
        <div className="buttons">
          <a href="/projects"><button className="fancy">View Projects</button></a>
          <a href={download_link} download="Javay_Porter_Resume">
          <button className="plain">Download Resume</button>
          </a>
        </div>
      </div>
      <div className="right">
        <img className="main-photo" src={photo} alt="jp-photo" />
      </div>
    </div>
  );
};

Summary.defaultProps = {
  username: "Javay Porter",
  title: "Software Engineer",
  summary:
    "I'm highly proficient in frontend and backend devolopment for simple to complex scalable web apps. I've had the pleasure of working for startups and huge organizations. Check out my blog for my perspective on those experiences. Want to know how I may help your project? Check out my portfolio and resume then reach out.",
};
export default Summary;
