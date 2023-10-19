import "../stylesheets/ContactArea.css";
import { SocialIcons } from "./Icons";

export const ContactArea = ({ cityState, phone, email }) => {
  return (
    <div id="contact-area">
      <div className="contact-area__left">
        <h4 className="contact-header">
          Contact <span className="highlight-color">Me</span>
        </h4>
        <p>{cityState}</p>
        <p>{`Phone: ${phone}`}</p>
        <p>{`Email: ${email}`}</p>
      </div>
      <div className="contact-area__right">
        <SocialIcons />
      </div>
    </div>
  );
};
