import {
  FaTwitterSquare,
  FaLinkedin,
  FaGithub,
  FaLaptopCode,
  FaReact,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaWordpress,
  FaYarn,
  FaNpm,
} from "react-icons/fa";
import { SiUpwork, SiBuymeacoffee } from "react-icons/si";
import { RiAliensFill } from "react-icons/ri";
import { GiSpellBook } from "react-icons/gi";
import { BiMessage, BiLogoJavascript } from "react-icons/bi";
import { AiOutlineConsoleSql } from "react-icons/ai";
import "../stylesheets/ContactArea.css";

export const navIcons = [
  <RiAliensFill />,
  <GiSpellBook />,
  <FaLaptopCode />,
  <BiMessage />,
];
const size = "2.5em";
const color = "gold";

export const toolIcons = [
  <BiLogoJavascript size={size} color={color} />,
  <FaNodeJs size={size} color="red" />,
  <FaReact size={size} color="lightblue" />,
  <FaPython size={size} color={color} />,
  <FaPhp size={size} color="green" />,
  <FaWordpress size={size} color="blue" />,
  <FaYarn size={size} color="lightblue" />,
  <FaNpm size={size} color="red" />,
  <AiOutlineConsoleSql size={size} color="blue" />,
];

export const SocialIcons = () => {
  const github = "https://github.com/javayporter";
  const linkedIn = "https://linkedin.com/in/javay-porter";
  const iconSize = "2em";
  return (
    <div className="icon__container">
      <FaTwitterSquare className="icon-padding" size={iconSize} />
      <a href={linkedIn} target="_blank">
        <FaLinkedin className="linkedin-icon" size={iconSize} />
      </a>
      <a href={github} target="_blank">
        <FaGithub className="github-icon" size={iconSize} />
      </a>
      <SiBuymeacoffee className="icon-padding" size={iconSize} />
      <SiUpwork className="icon-padding" size={iconSize} />
    </div>
  );
};
