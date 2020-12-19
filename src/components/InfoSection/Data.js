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
      onClick={() => {return(window.open("https://github.com/rahul-bhatia/instaclone"))}}
      size={32}
      style={{ color: "#03814C", margin: 10 }}
    />,
    // <FaApple
    //   size={42}
    //   onClick={() => alert("Apple")}
    //   style={{ color: "#03814C", margin: 10 }}
    // />,
    <SiJava onClick={() => {return(window.open("https://github.com/rahul-bhatia/Byculla-Fire-Station"))}}onMouseEnter={(event) => event.target.style} size={42} style={{ color: "#03814C", margin: 10 }} />,
    <SiKotlin size={34} style={{ color: "#03814C", margin: 10 }} />,
    <FaNodeJs onClick={() => {return(window.open("https://github.com/rahul-bhatia/mailChimp"))}} size={42} style={{ color: "#03814C", margin: 10 }} />,
    <FaReact onClick={() => {return(window.open("https://github.com/rahul-bhatia/KeeperApp"))}} size={42} style={{ color: "#03814C", margin: 10 }} />,
    // <FaSass size={42} style={{ color: "#03814C", margin: 10 }} />,
    // <SiGraphql size={42} style={{ color: "#03814C", margin: 10 }} />,
    <FaPython size={42} style={{ color: "#03814C", margin: 10 }} />,
    <SiTensorflow size={42} style={{ color: "#03814C", margin: 10 }} />,
    <SiPytorch size={42} style={{ color: "#03814C", margin: 10 }} />,
    <FaDocker size={42} style={{ color: "#03814C", margin: 10 }} />,
    <GrHadoop size={42} style={{ color: "#03814C", margin: 10 }} />,
    <SiDigitalocean size={42} style={{ color: "#03814C", margin: 10 }} />,
  ],
  buttonLabel: "visit my work",
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
      onClick={() => {return(window.open("https://github.com/rahul-bhatia"))}}
      size={42}
      style={{ color: "#03814C", margin: 10 }}
    />,
    <FaLinkedinIn
      size={42}
      onClick={() =>{return(window.open("https://www.linkedin.com/in/rahul-bhatia-b13b74144/"))}}
      style={{ color: "#03814C", margin: 10 }}
    />,
    <FaGoogle size={42} style={{ color: "#03814C", margin: 10 }} />,
    <FaTwitter size={34} style={{ color: "#03814C", margin: 10 }} onClick={() =>{return(window.open("https://twitter.com/rahulbhatia1517"))}}/>,
    <SiLeetcode size={42} style={{ color: "#03814C", margin: 10 }} onClick={() =>{return(window.open("https://leetcode.com/rahulbhatia98/"))}}/>,
    <FaInstagram size={42} style={{ color: "#03814C", margin: 10 }} onClick={() =>{return(window.open("https://www.instagram.com/rahul_bhatia98/"))}}/>,
  ],
  buttonLabel: "Get in touch",
  imgStart: true,
  img: require("../../images/connect.svg").default,
  alt: "Rahul Developing Network",
  dark: false,
  primary: false,
  darkText: true,
};
