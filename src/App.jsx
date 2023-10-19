import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import { Home } from "./pages/Home.jsx";
import { UnderConstruction } from "./components/UnderConstruction";
import { ExperienceCard } from "./components/ExperienceCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<UnderConstruction />} />
        <Route path="/projects" element={<UnderConstruction />} />
        <Route path="/experience" element={<ExperienceCard />} />
        <Route path="/blog" element={<UnderConstruction />} />
      </Route>
    </Routes>
  );
}

export default App;
