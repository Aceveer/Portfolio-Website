import React from "react";
import styled from "styled-components";
import FlipCard from "./FlipCard";
import CardItems from "./CardConstants";

const SkillsSectionWrapper = styled.div`
  background-color: #222;
  border: 2px solid #444;
  border-radius: 8px;
  padding: 20px;
`;

const SkillsHeader = styled.h2`
  color: #fff;
  margin-bottom: 10px;
  text-align: center;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Add gap between cards */
`;

const certifications = [
  {
    name: "Certification 1",
    description: "Description of Certification 1",
    document: './../../certificates/Google Data Analytics Certificate'
  },
  {
    name: "Certification 2",
    description: "Description of Certification 2",
    document: './../../certificates/Meta Front-End Developer Certificate'
  },
  // Add more certification objects as needed
];


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
    </div>
  );
};

export default SkillsSection;
