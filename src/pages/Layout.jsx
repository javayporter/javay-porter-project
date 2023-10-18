import { Outlet } from "react-router-dom";
import "../App.css";
import "../style.css";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <div className="app__layout">
        <div className="app__navbar">
          <NavBar />
        </div>
        <div className="app__layout-right">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
