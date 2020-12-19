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

import hackathon from '../../images/hackathon.svg';
import blog from '../../images/blog.svg';
import publication from '../../images/publication.svg';
import certificate from '../../images/certification.svg';

const Achievements = () => {
  return (
    <ProjectContainer id="Achievements">
      <ProjectsH1>Some cool stuff</ProjectsH1>
      <ProjectWrapper>
        <ProjectCard onClick={() =>{return(window.open("https://www.sih.gov.in/pdf/past_events/software_2019.pdf"))}}>
          <ProjectIcon src={hackathon} />
          <ProjectsH2>SIH 2019'</ProjectsH2>
          <ProjectsP>
          Team lead in a nationwide hackathon namely Smart India Hackathon, 2019 in Software Edition. Our team developed the solution for a particular use case for the Ministry of Civil Aviation under the UDAAN scheme initiated by Government of India. The problem was stated under complex category and we were awarded a whopping sum of INR 100,000.
          </ProjectsP>
        </ProjectCard>
        <ProjectCard onClick={() =>{return(window.open(" https://link.springer.com/chapter/10.1007/978-981-15-7421-4_8"))}}>
          <ProjectIcon src={publication} />
          <ProjectsH2>Publications</ProjectsH2>
          <ProjectsP>
          Author of Harvest Treasure: Prediction of Best Crop Yield, a Springer research paper published in Intelligent Computing and Networking, written for predicting the optimal crop yield based on various weather and soil parameters acquired using several weather API's and datasets.
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
        {/*<ProjectCard>
          <ProjectIcon src={certificate} />
          <ProjectsH2>Certification</ProjectsH2>
          <ProjectsP>
            An Android app which tends to clone instagram of mid 2010's.
          </ProjectsP>
        </ProjectCard> */}
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default Achievements;
