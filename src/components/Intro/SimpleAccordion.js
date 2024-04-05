import React, { useState } from "react";
import styled from "styled-components";
import AccordionItemContent from "./AccordionItemContent";
import WorkItems from "./WorkConstants"; // Import WorkItems from WorkConstants.js
import EducationItems from "./EducationConstants"; // Import EducationItems from EducationConstants.js

const AccordionWrapper = styled.div`
  width: 100%;
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
  background-color: ${(props) => (props.isOpen ? "green" : "#444")}; /* Darker gray background for title */
  border: none;
  cursor: pointer;
  outline: none;
  color: #fff; /* White text color */
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
              // links = {item.highlights.map( (highlight) => highlight.link)}
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
    </AccordionWrapper>
  );
};

export default SimpleAccordion;
