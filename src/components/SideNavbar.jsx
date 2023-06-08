import "../stylesheets/SideNavbar.scss";
import MainButton from "./MainButton";
const SideNavbar = (props) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <div className="top">
          <div className="img-container">Side Nav Image</div>
          <div className="sidebar-summary">{props.summary}</div>
          <div className="socials">Social media links and icons</div>
        </div>
        <div className="bottom">
          <div className="sidenav-links">
            <a href="">About Me</a>
            <a href="">Experience</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
          </div>
          <MainButton text="Hire Me" />
        </div>
      </div>
    </div>
  );
};
SideNavbar.defaultProps = {
  summary:
    "Hi, my name is Javay Porter and I'm a junior software engineer. Welcome to my personal website!",
};

export default SideNavbar;
