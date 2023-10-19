import "../App.css";

import { PiWarningBold } from "react-icons/pi";
export const UnderConstruction = () => {
  return (
    <div className="under-construction">
      <div className="warning-text">
        <h4>Page Under Constructon</h4>
        <h5>Content will be avaiable soon! Thank you for your patience.</h5>
      </div>
      <div className="warning-icon">
        <PiWarningBold size="20em" />
      </div>
    </div>
  );
};
