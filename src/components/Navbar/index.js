import React from "react";
import {FaBars} from 'react-icons/fa';

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
  const s1="<Rahul Bhatia />"
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <h1 style={{fontFamily:"dancing script"}}>{s1}</h1>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="Technology">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="Projects">Projects</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="about">Achievements</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="Contact">Contact</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/getInTouch">Get In Touch</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
