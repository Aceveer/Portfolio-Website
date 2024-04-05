import React from "react";
import styled from "styled-components";
import SimpleAccordion from "./SimpleAccordion";

// Styled card component
const Card = styled.div`
  background-color: #FF00FF;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const CardTitle = styled.h2`
  color: #333333;
  font-size: 24px;
  margin-bottom: 20px;
`;

const AccordionCard = () => {
  return (
    <Card>
      <CardTitle>Accordion Card</CardTitle>
      <SimpleAccordion />
    </Card>
  );
};

export default AccordionCard;