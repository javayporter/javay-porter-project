import {
  FaTwitterSquare,
  FaLinkedin,
  FaGithub,
  FaLaptopCode,
} from "react-icons/fa";
import { SiUpwork, SiBuymeacoffee } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { RiAliensFill } from "react-icons/ri";
import { GiSpellBook } from "react-icons/gi";
import { BiMessage } from "react-icons/bi";

export const navIcons = [
  <RiAliensFill />,
  <GiSpellBook />,
  <FaLaptopCode />,
  <BiMessage />  
];

export const SocialIcons = () => {
  const iconSize = "2em";
  return (
    <div className="icon__container">
      <ul className="icon__links">
        <FaTwitterSquare className="icon-padding" size={iconSize} />
        <FaLinkedin className="icon-padding" size={iconSize} />
        <FaGithub className="icon-padding" size={iconSize} />
        <SiBuymeacoffee className="icon-padding" size={iconSize} />
        <SiUpwork className="icon-padding" size={iconSize} />
      </ul>
    </div>
  );
};
