import React,{useState} from "react";
import Video from "../../videos/TurningGlobe.mp4";
import {Button} from '../ButtonElement';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Typed from "react-typed";

const HeroSection = () => {
    const [hover,setHover] = useState(false)
    const onHover = () =>{
        setHover(!hover)
    }
  
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg
            onMouseEnter={(event) => (event.target.play())}
            onMouseLeave={(event) => (event.target.pause())}
            //autoPlay
            loop
            muted 
            playbackspeed={1.25}
            src={Video}
            type="video/mp4"
          />
        </HeroBg>
        <HeroContent>
          <HeroH1> Hi , I'm Rahul Bhatia</HeroH1>
          <HeroP>
            <span>{' '}</span>
            <Typed
              strings={[
                "A passionate Mobile Developer .",
                "Vehement Web Developer .",
                "Software Programmer.",
                "An Data Science Enthusiast . "
              ]}
              typeSpeed={40}
              backSpeed={60}
              loop={true}
            />
            <p></p>
          </HeroP>
          <HeroP>
              I look forward to Research, Design, Implement and Manage software programs.
          </HeroP>
          <HeroBtnWrapper>
            <Button primary="true" dark="true" to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
              SEE MY RESUME {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>  
      </HeroContainer>
    </>
  );
};
export default HeroSection;
