import { Outlet } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";
import "../App.css";

const Layout = () => {
    return (
         <>
      <div className="app__container">
        <div className="app__container-left">
          <SideNavbar />
        </div>
        <div className="app__container-right">
          <Outlet />
        </div>
      </div>
    </>
    );
}

export default Layout;