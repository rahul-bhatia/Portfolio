import React from "react";
import {
  ProjectContainer,
  ProjectWrapper,
  ProjectCard,
  ProjectIcon,
  ProjectsH1,
  ProjectsH2,
  ProjectsP,
} from "./ProjectElements";

import blog from '../../images/blog.svg';
import fulltime from '../../images/fulltime.svg';
import intern from '../../images/intern.svg'; 

const Experience = () => {
    return (
        <ProjectContainer id="Experience">
            <ProjectsH1>Experience</ProjectsH1>
            <ProjectWrapper>
            <ProjectCard onClick={() =>{return(window.open(" https://www.linkedin.com/in/rahul-bhatia-b13b74144/"))}}>
          <ProjectIcon src={fulltime} />
          <ProjectsH2>Sezzle Inc.</ProjectsH2>
          <ProjectsP>
          Worked with the Risk team to execute software solutions to manage the credit-limit of users using various decisioning
algorithms, writing delinquency jobs, and writing blocklist jobs to underwrite users.
Collaborated with a data engineering team to implement the rules generated using machine learning techniques to gauge
credit score, participated in code-reviews and cross-functional team requirement gathering.
          </ProjectsP>
        </ProjectCard>
        <ProjectCard onClick={() =>{return(window.open(" https://www.linkedin.com/in/rahul-bhatia-b13b74144/"))}}>
          <ProjectIcon src={intern} />
          <ProjectsH2>Internship @ Sezzle Inc.</ProjectsH2>
          <ProjectsP>
          Collaborated with the Risk Team to underwrite fraud prevention and deliver customer-facing features to reduce risk
while increasing conversion.Designed tools for the analyst dashboard to identify tech debts and decide users' credit limits for 7 million users. 
          </ProjectsP>
        </ProjectCard>
        <ProjectCard onClick={() =>{return(window.open(" https://www.linkedin.com/in/rahul-bhatia-b13b74144/"))}}>
          <ProjectIcon src={blog} />
          <ProjectsH2>Internships @ IDZ and BARC</ProjectsH2>
          <ProjectsP>
            I worked with IDZ digital, where my role was to build android apps having googleadd banner, multiple layouts, recycler views, facebook Ad library API, SQLlite databases, android web views and other functionalities.
            I was also opportunistic enough to work with the reasearch team at Babha Atomic Reasearch center(BARC-Mumbai) for designing the static analyzer for the written code which has to get executed in the reactor. 
          </ProjectsP>
        </ProjectCard>
        </ProjectWrapper>
        </ProjectContainer>
    )
}

export default Experience;