import ExperienceCard from "./components/ExperienceCard";
import { BrowserRouter, Routes, Router } from "react-router-dom";
import SideNavbar from "./components/SideNavbar";
import Summary from "./components/Summary";
import "../src/App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app__container">
          <div className="app__container-left">
            <SideNavbar />
          </div>
          <div className="app__container-right">
            <div className="app__container-right__top">
              <Summary />
            </div>
            <div className="app__container-right__bottom">
              <ExperienceCard />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
