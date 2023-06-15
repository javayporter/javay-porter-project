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
import { GrContact } from "react-icons/gr";

export const navIcons = [
  <RiAliensFill />,
  <GiSpellBook />,
  <FaLaptopCode />,
  <GrContact />,
];

export const SocialIcons = () => {
  return (
    <div className="icon__container">
      <ul className="icon__links">
        <FaTwitterSquare />
        <FaLinkedin />
        <FaGithub />
        <SiBuymeacoffee />
        <SiUpwork />
      </ul>
    </div>
  );
};
