import ExperienceCard from "./components/ExperienceCard";
import Hero from "./components/Hero";
import SideNavbar from "./components/SideNavbar";
import Summary from "./components/Summary";
import TopNavbar from "./components/TopNavbar";
import "../src/App.css";

function App() {
  return (
    <>
      <div className="app-container">
        <SideNavbar />
        <div className="feed-container">
          <Summary />
          <div className="bottom-container">
            <div className="resume-container">
              <ExperienceCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
