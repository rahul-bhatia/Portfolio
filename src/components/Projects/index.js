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

import chord from '../../images/chord.svg';
import food from '../../images/food.svg';
import bitcoin from '../../images/bitcoin.svg';

const Projects = () => {
  return (
    <ProjectContainer id="Projects">
      <ProjectsH1>My Projects</ProjectsH1>
      <ProjectWrapper>
        <ProjectCard onClick={() =>{return(window.open("https://github.com/rahul-bhatia/FoodImageClassifier"))}}>
          <ProjectIcon src={food} />
          <ProjectsH2>Indian Food Image Classifier</ProjectsH2>
          <ProjectsP>
            An Image Classifier trained using Poets2 on Indian Food items
            Dataset.
          </ProjectsP>
        </ProjectCard>
        <ProjectCard onClick={() =>{return(window.open("https://github.com/rahul-bhatia/chord-protocol"))}}>
          <ProjectIcon src={chord} />
          <ProjectsH2>Chord Messenger</ProjectsH2>
          <ProjectsP>
            Modeled a decentralized, multi-tiered network to implement chord protocol that can withstand 9 million nodes. Extended message passing to gossip protocol and push sum computation.
          </ProjectsP>
        </ProjectCard>
        <ProjectCard onClick={() =>{return(window.open("https://github.com/rahul-bhatia/Bitcoint-Miner"))}}>
          <ProjectIcon src={bitcoin} />
          <ProjectsH2>Bitcoin Miner</ProjectsH2>
          <ProjectsP>
          Constructed a distributed system to mine all possible strings/coins using SHA-156 hash value matching with N number
of leading zeroes. Distributed the processing between 5 machines, each having 12 actors with a processing speed of 4 minutes.
          </ProjectsP>
        </ProjectCard>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default Projects;
