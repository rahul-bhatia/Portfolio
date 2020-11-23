import { FaApple,FaDocker,FaAndroid,FaReact, FaPython, FaSass, FaNodeJs } from "react-icons/fa";
import { FcAndroidOs } from "react-icons/fc";

export const homeObjOne = {
  id: "Technology",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "What I Love to Do",
  headline: "Building Mobile and Web apps Having Intelligence.",
  description: [
    <FaReact size={42} style={{ color: "#03814C" }} />,
    <FaAndroid size={42} style={{ color: "#03814C" }}/>,
    <FaPython size={42} style={{ color: "#03814C" }}/>,
    <FaSass size={42} style={{ color: "#03814C" }}/>,
    <FaNodeJs size={42} style={{ color: "#03814C" }}/>,
    <FaDocker size={42} style={{ color: "#03814C" }}/>,
    <FaApple size={42} style={{ color: "#03814C" }}/>,
  ],
  buttonLabel: "Get Quote",
  imgStart: false,
  img: require("../../images/coding.svg").default,
  alt: "Rahul Developing projects",
  dark: true,
  primary: true,
  darkText: false,
};
