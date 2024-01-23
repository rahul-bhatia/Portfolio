import React,{useState,useEffect} from "react";
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import ClipLoader from "react-spinners/RingLoader";

import {
  NavbarContainer,
  Nav,
  NavLogo,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";

const Navbar = ({toggle}) => {
  const [scrollNav,setScrollNav] = useState(false);

  const changeNav = ()=> {
    if(window.scrollY >= 80){
      setScrollNav(true)
    }
    else{
      setScrollNav(false)
    }
  }

    useEffect(() => {
      window.addEventListener('scroll',changeNav)
    }, [])

    const toggleHome = () =>{
      scroll.scrollToTop();
    }
  const s1="<Rahul Bhatia />"
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <h1 style={{fontFamily:"dancing script"}}>{s1}</h1>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
           
              <NavItem>
                <NavLinks to="Technology"
                  smooth="true"
                  duration={500} 
                  spy={true}
                  exact= 'true'
                  offset={-80}
                >About</NavLinks>
              </NavItem>
              <NavItem>
              <NavLinks to="Technology"
                  smooth="true"
                  duration={500} 
                  spy={true}
                  exact= 'true'
                  offset={-80}
                >Experience</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="Projects"
                 smooth="true"
                 duration={500} 
                 spy={true}
                 exact= 'true'
                 offset={-80}
                 >Projects</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="Achievements"
                 smooth="true"
                 duration={500} 
                 spy={true}
                 exact= 'true'
                 offset={-80}
                 >Achievements</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="Contact"
                 smooth="true"
                 duration={500} 
                 spy={true}
                 exact= 'true'
                 offset={-80}
                 >Contact</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink onClick={()=>{ window.location.href = "https://www.linkedin.com/in/rahul-bhatia-b13b74144/";}}>Get In Touch</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
