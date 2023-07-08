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
import { SiUpwork, SiBuymeacoffee, } from "react-icons/si";
import { RiAliensFill } from "react-icons/ri";
import { GiSpellBook } from "react-icons/gi";
import { BiMessage, BiLogoJavascript } from "react-icons/bi";
import { AiOutlineConsoleSql } from "react-icons/ai";

export const navIcons = [
  <RiAliensFill />,
  <GiSpellBook />,
  <FaLaptopCode />,
  <BiMessage />  
];
const size = "2.5em";
const color = "gold";

export const toolIcons = [
    <BiLogoJavascript size={size} color={color} />,
    <FaNodeJs size={size} color="red" />,
    <FaReact size={size} color="lightblue"/>,
    <FaPython size={size} color={color} />,
    <FaPhp size={size} color="green" />,
    <FaWordpress size={size} color="blue"/>,
    <FaYarn size={size} color="lightblue" />,
    <FaNpm size={size} color="red" />,
    <AiOutlineConsoleSql size={size} color="blue"/>
    
]

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
