import "../stylesheets/SideNavbar.css";
import MainButton from "./MainButton";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data/data";
import { TiThMenu } from "react-icons/ti";

import { SocialIcons } from "./Icons";

const SideNavbar = (props) => {
  return (
    <nav>
      <div className="navbar nav__container">
        <div className="top">
          <div className="img-container">Side Nav Image</div>
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
                  {icon}
                  <NavLink
                    className={({ isActive }) => (isActive ? "active-nav" : "")}
                    to={path}
                  >
                    {name}
                  </NavLink>
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
    "Hi, my name is Javay Porter and I'm a junior software engineer. Welcome to my personal website!",
};

export default SideNavbar;
