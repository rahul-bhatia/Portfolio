import { FaApple,FaDocker,FaAndroid,FaReact, FaPython, FaSass, FaNodeJs } from "react-icons/fa";
import { SiKotlin,SiJava,SiDigitalocean,SiGraphql,SiPytorch,SiTensorflow } from "react-icons/si";

export const homeObjOne = {
  id: "Technology",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "What I Love to Do",
  headline: "Building Mobile and Web apps Having Intelligence.",
  description: [
    <FaAndroid onClick={()=>alert("android")}size={42} style={{ color: "#03814C" }}/>,
    <FaApple size={42} onClick={()=>alert("Apple")}style={{ color: "#03814C" }}/>,
    <SiJava size={42} style={{ color: "#03814C" ,margin:10}}/>,
    <SiKotlin size={34} style={{ color: "#03814C" }}/>,
    <FaNodeJs size={42} style={{ color: "#03814C" }}/>,
    <FaReact size={42} style={{ color: "#03814C" }} />,
    <FaSass size={42} style={{ color: "#03814C" }}/>,
    <SiGraphql size={42} style={{ color: "#03814C" }}/>,  
    <FaPython size={42} style={{ color: "#03814C" }}/>,
    <SiTensorflow size={42} style={{ color: "#03814C" }}/>,
    <SiPytorch size={42} style={{ color: "#03814C" }}/>,
    <FaDocker size={42} style={{ color: "#03814C" }}/>,
    <SiDigitalocean size={42} style={{ color: "#03814C" }}/>,
  ],
  buttonLabel: "Get Quote",
  imgStart: false,
  img: require("../../images/coding.svg").default,
  alt: "Rahul Developing projects",
  dark: true,
  primary: true,
  darkText: false,
};
