import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SideBtnWrap,
  SidebarRoute
} from "./SidebarElement";

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="Technology" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="Experience" onClick={toggle}>Experience</SidebarLink>
          <SidebarLink to="Projects" onClick={toggle}>Projects</SidebarLink>
          <SidebarLink to="Achievements" onClick={toggle}>Achievements</SidebarLink>
          <SidebarLink to="Contact" onClick={toggle} >contact</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="">Get In Touch</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
