import "../stylesheets/TopNavbar.scss";
const TopNavbar = () => {
  return (
    <div className="t-main-container">
      Javay Porter
      <div className="left-nav">
        <img src="" alt="brand-logo" />
      </div>
      <div className="right-nav">
        <div className="nav-links">
          <a href="/work-experience">Work Experience</a>
          <a href="/skills">Skills</a>
          <a href="/projects">Projects</a>
        </div>
      </div>
    </div>
  );
};
export default TopNavbar;
