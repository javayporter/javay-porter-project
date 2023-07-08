import { toolIcons } from "./Icons.jsx";
import "../stylesheets/Hero.css"

const Hero = () => {
  return (
    <div className="hero__container">
     {
        toolIcons.map((tool, index) => {
            return (
                <div className="tools__container" key={index} >
                    {tool}
                    </div>
            )}
        )
     }
    </div>
  );
};

export default Hero;
