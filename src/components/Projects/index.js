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

import crop from '../../images/crop.svg';
import food from '../../images/food.svg';
import instagram from '../../images/instagram.svg';

const Projects = () => {
  return (
    <ProjectContainer id="Projects">
      <ProjectsH1>My Projects</ProjectsH1>
      <ProjectWrapper>
        <ProjectCard>
          <ProjectIcon src={crop} />
          <ProjectsH2>Best crop yeild prediction</ProjectsH2>
          <ProjectsP>
            A Random Forest regressor curated to predicts the best crop yield
            for the given place,date and time
          </ProjectsP>
        </ProjectCard>
        <ProjectCard onClick={() =>{return(window.open("https://github.com/rahul-bhatia/FoodImageClassifier"))}}>
          <ProjectIcon src={food} />
          <ProjectsH2>Indian Food Image Classifier</ProjectsH2>
          <ProjectsP>
            An Image Classifier trained using Poets2 on Indian Food items
            Dataset.
          </ProjectsP>
        </ProjectCard>
        <ProjectCard onClick={() =>{return(window.open("https://github.com/rahul-bhatia/instaclone"))}}>
          <ProjectIcon src={instagram} />
          <ProjectsH2>Instaclone</ProjectsH2>
          <ProjectsP>
            An Android app which tends to clone instagram of mid 2010's.
          </ProjectsP>
        </ProjectCard>
        {/* <ProjectCard>
          <ProjectIcon src={instagram} />
          <ProjectsH2>Instaclone</ProjectsH2>
          <ProjectsP>
            An Android app which tends to clone instagram of mid 2010's.
          </ProjectsP>
        </ProjectCard> */}
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default Projects;
