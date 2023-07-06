import "../stylesheets/SideNavbar.css";
import MainButton from "./MainButton";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data/data";
import { TiThMenu } from "react-icons/ti";

import { SocialIcons } from "./Icons";

const SideNavbar = (props) => {
    const side_photo = "https://i.imgur.com/9MfC4Zz.png"
  return (
    <nav>
      <div className="navbar nav__container">
        <div className="top">
          <div className="img-container"><a href="/"><img src={side_photo} alt="test"/></a></div>
          <div className="sidebar-summary">{props.summary}</div>
          <div className="socials">
            <SocialIcons />
          </div>
        </div>
        <div className="bottom">
          <ul className="nav__links">
            <div className="nav__toggle-btn">
              <TiThMenu />
            </div>
            {links.map(({ name, path, icon }, index) => {
              return (
                <li key={index}>
                    <div className="nav__spacing_container">
                <div className="nav__spacing_1">
                  {icon}
                  </div>
                  <div className="nav__spacing_2">
                  <NavLink
                    className={({ isActive }) => (isActive ? "active-nav" : "")}
                    to={path}
                  >
                    {name}
                  </NavLink>
                  </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
SideNavbar.defaultProps = {
  summary:
    "Hi, my name is Javay Porter and I'm a software engineer. Welcome to my personal website!",
};

export default SideNavbar;
