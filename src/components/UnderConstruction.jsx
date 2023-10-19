import "../App.css";
import { PiSealWarningFill } from "react-icons/pi";

export const UnderConstruction = () => {
  return (
    <div className="under-construction">
      <div className="warning-text">
        <h5>Page Under Constructon</h5>
        <p>Content will be avaiable soon! Thank you for your patience.</p>
      </div>
      <div className="warning-icon">
        <PiSealWarningFill size="12em" />
      </div>
    </div>
  );
};
