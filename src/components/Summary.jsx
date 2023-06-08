import "../stylesheets/Summary.scss";
const Summary = (props) => {
  return (
    <div className="summary-container">
      <div className="left">
        <div className="summary-text">
          <h1>{props.username}</h1>
          <h4>{props.title}</h4>
          <h6>{props.summary}</h6>
        </div>
        <div className="buttons">
          <button className="fancy">View Projects</button>
          <button className="plain">Download Resume</button>
        </div>
      </div>
      <div className="right">Personal photo</div>
    </div>
  );
};

Summary.defaultProps = {
  username: "Javay Porter",
  title: "Junior Software Engineer at Redirect Health",
  summary:
    "I'm a software engineer highly proficient in frontend and backend devolopment for simple to complex scalable web apps. I've had the pleasure of working for startups and huge organizations. Check out my blog for my perspective on those experiences. Want to know how I may help your project? Check out my portfolio and resume then reach out.",
};
export default Summary;
