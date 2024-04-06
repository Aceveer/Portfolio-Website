import React from "react";
import styled, {keyframes} from "styled-components";
import FlipCard from "./FlipCard";
import CardItems from "./CardConstants";
import Carousel from "./Carousel";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SkillsSectionWrapper = styled.div`
  background-color: #222;
  border: 2px solid #444;
  border-radius: 8px;
  padding: 20px;
  animation: ${fadeIn} 2s ease-in-out;
`;

const SkillsHeader = styled.h2`
  color: #fff;
  margin-bottom: 10px;
  text-align: center;
  font-size: 3rem;
  animation: ${fadeIn} 2s ease-in-out;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Add gap between cards */
`;


const CertificationsHeader = styled.h2`
  color: #fff;
  margin-bottom: 10px;
  text-align: center;
  font-size: 3rem;
  padding-top:20px;
  animation: ${fadeIn} 2s ease-in-out;
`;

const SkillsSection = () => {
  return (
    <div id='skills'>
      <SkillsHeader>Skills</SkillsHeader>
      <SkillsSectionWrapper>
        <CardsWrapper>
          {CardItems.map((item, index) => (
            <FlipCard
              key={index}
              frontTitle={item.frontTitle}
              frontPhoto={item.frontPhoto}
              backDesc={item.backDesc}
            />
          ))}
        </CardsWrapper>
      </SkillsSectionWrapper>

        <CertificationsHeader>Certifications</CertificationsHeader>
        <Carousel/>
    </div>
  );
};

export default SkillsSection;
