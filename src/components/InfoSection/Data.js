import {
  FaApple,
  FaDocker,
  FaAndroid,
  FaReact,
  FaPython,
  FaSass,
  FaNodeJs,
  FaLinkedinIn,
  FaGithub,
  FaGoogle,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import{GrHadoop} from 'react-icons/gr';
import {
  SiKotlin,
  SiJava,
  SiDigitalocean,
  SiGraphql,
  SiPytorch,
  SiTensorflow,
  SiLeetcode
} from "react-icons/si";

export const homeObjOne = {
  id: "Technology",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "What I Love to Do",
  headline: "Building Mobile and Web apps Having Intelligence.",
  description: [
    <FaAndroid
      onClick={() => alert("android")}
      size={42}
      style={{ color: "#03814C", margin: 10 }}
    />,
    <FaApple
      size={42}
      onClick={() => alert("Apple")}
      style={{ color: "#03814C", margin: 10 }}
    />,
    <SiJava size={42} style={{ color: "#03814C", margin: 10 }} />,
    <SiKotlin size={34} style={{ color: "#03814C", margin: 10 }} />,
    <FaNodeJs size={42} style={{ color: "#03814C", margin: 10 }} />,
    <FaReact size={42} style={{ color: "#03814C", margin: 10 }} />,
    <FaSass size={42} style={{ color: "#03814C", margin: 10 }} />,
    <SiGraphql size={42} style={{ color: "#03814C", margin: 10 }} />,
    <FaPython size={42} style={{ color: "#03814C", margin: 10 }} />,
    <SiTensorflow size={42} style={{ color: "#03814C", margin: 10 }} />,
    <SiPytorch size={42} style={{ color: "#03814C", margin: 10 }} />,
    <FaDocker size={42} style={{ color: "#03814C", margin: 10 }} />,
    <GrHadoop size={42} style={{ color: "#03814C", margin: 10 }} />,
    <SiDigitalocean size={42} style={{ color: "#03814C", margin: 10 }} />,
  ],
  buttonLabel: "Get Quote",
  imgStart: false,
  img: require("../../images/coding.svg").default,
  alt: "Rahul Developing projects",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjTwo = {
  id: "Contact",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "connect socially",
  headline: "Drop me a line and get me on board.",
  description: [
    <FaGithub
      onClick={() => alert("android")}
      size={42}
      style={{ color: "#03814C", margin: 10 }}
    />,
    <FaLinkedinIn
      size={42}
      onClick={() => alert("Apple")}
      style={{ color: "#03814C", margin: 10 }}
    />,
    <FaGoogle size={42} style={{ color: "#03814C", margin: 10 }} />,
    <FaTwitter size={34} style={{ color: "#03814C", margin: 10 }} />,
    <SiLeetcode size={42} style={{ color: "#03814C", margin: 10 }} />,
    <FaInstagram size={42} style={{ color: "#03814C", margin: 10 }} />,
  ],
  buttonLabel: "Get Quote",
  imgStart: true,
  img: require("../../images/connect.svg").default,
  alt: "Rahul Developing Network",
  dark: false,
  primary: false,
  darkText: true,
};
