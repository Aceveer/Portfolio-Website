import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import AccordionItemContent from "./AccordionItemContent";
import WorkItems from "./WorkConstants"; // Import WorkItems from WorkConstants.js
import EducationItems from "./EducationConstants"; // Import EducationItems from EducationConstants.js
import HobbyItems from "./HobbyConstants"; // Import EducationItems from EducationConstants.js

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AccordionWrapper = styled.div`
  width: 100%;
  animation: ${fadeIn} 2s ease-in-out;
`;

const AccordionItem = styled.div`
  background-color: #2c2c2c; /* Dark gray background */
  margin-bottom: 1px;
  border: 2px solid #555; /* Bold border */
  border-radius: 8px; /* Rounded corners */
  overflow: hidden; /* Hide overflow to animate content */
`;

const AccordionTitle = styled.button`
  width: 100%;
  padding: 15px;
  text-align: left;
  background-color: ${(props) => (props.isOpen ? "#00FFAA" : "#444")}; /* Darker gray background for title */
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 1.5rem;
  color: ${(props) => (props.isOpen ? "#000" : "#FFF")};/* White text color */
  transition: background-color 0.5s; /* Transition for background color change */
`;

const AccordionContent = styled.div`
  padding: 15px;
  max-height: ${(props) => (props.isOpen ? "10000px" : "0")}; /* Set max height based on isOpen */
  overflow: hidden; /* Hide content when collapsed */
  transition: max-height 0.3s ease-out; /* Transition for collapsing */
  transition: max-height 0.5s ease-in; /* Transition for expanding */
`;

const SimpleAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <AccordionWrapper>
      <AccordionItem key={1}>
        <AccordionTitle onClick={() => toggleAccordion(1)} isOpen={activeIndex === 1}>
          Experience
        </AccordionTitle>
        <AccordionContent isOpen={activeIndex === 1}>
          {WorkItems.map((item, index) => (
            <AccordionItemContent
              key={index}
              title={item.organizationName}
              duration = {item.duration}
              subtitle={item.role}
              highlights={item.highlights}
              imageSrc={item.photo}
            />
          ))}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem key={2}>
        <AccordionTitle onClick={() => toggleAccordion(2)} isOpen={activeIndex === 2}>
          Education
        </AccordionTitle>
        <AccordionContent isOpen={activeIndex === 2}>
          {EducationItems.map((item, index) => (
           <AccordionItemContent
           key={index}
           title={item.organizationName}
           duration = {item.duration}
           subtitle={item.role}
           highlights={item.highlights}
           imageSrc={item.photo}
         />
          ))}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem key={3}>
        <AccordionTitle onClick={() => toggleAccordion(3)} isOpen={activeIndex === 3}>
          Hobbies
        </AccordionTitle>
        <AccordionContent isOpen={activeIndex === 3}>
          {HobbyItems.map((item, index) => (
            <AccordionItemContent
              key={index}
              title={item.organizationName}
              duration = {item.duration}
              subtitle={item.role}
              highlights={item.highlights}
              imageSrc={item.photo}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </AccordionWrapper>
  );
};

export default SimpleAccordion;
