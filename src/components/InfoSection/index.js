import React from "react";
import { Button } from "../ButtonElement";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  dark,
  dark2
} from "./InfoElements";

const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headline,darkText,description,buttonLabel,img,alt}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>
                   {description}
                </Subtitle>
                <BtnWrap>
                    <Button to="home"
                        primary={primary ? 1 : 0}
                        smoot={true}
                        dark={dark ? 1: 0}
                        dark2={dark2?1:0}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
