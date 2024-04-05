import React, { useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";

const Wrapper = styled.div`
  perspective: 1000px; /* Increase perspective for better 3D effect */
`;

const Card = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  transition: transform 0.6s; /* Add transition for smooth flipping */
  transform-style: preserve-3d; /* Enable 3D transformations */
  margin-bottom: 1rem; /* Add margin to create space between card and text */
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Hide the backface of the front side */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.15);
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Hide the backface of the back side */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #00FFAA;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.15);
  transform: rotateY(180deg); /* Initially hide the back side */
`;

const CardContent = styled.div`
  text-align: center;
`;

const CardTitle = styled.div`
  font-weight: 600;
  font-size: 1rem;
  color: ${rgba("#090C22", 0.85)};
`;

const CardImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`;

const FlipCard = ({ frontTitle, frontPhoto, backDesc }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Wrapper>
      <Card onClick={handleCardClick} style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)" }}>
        <CardFront>
          <CardImage src={frontPhoto} alt={frontTitle} />
          <CardContent>
            <CardTitle>{frontTitle}</CardTitle>
          </CardContent>
        </CardFront>
        <CardBack>
          <CardContent>
            <CardTitle>{backDesc}</CardTitle>
          </CardContent>
        </CardBack>
      </Card>
    </Wrapper>
  );
};

export default FlipCard;
