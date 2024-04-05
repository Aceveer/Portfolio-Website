import React, { Component } from "react";
import styled from "styled-components";
import { rgba } from "polished";

const Wrapper = styled.div`
  perspective: 1000px; /* Increase perspective for better 3D effect */
`;

const Card = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  transition: transform 0.6s; /* Add transition for smooth flipping */
  transform-style: preserve-3d; /* Enable 3D transformations */
  margin-bottom: 1rem; /* Add margin to create space between card and text */
  background-image: url(${require("../../images/Resized.jpg")});
  background-size: cover;
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Hide the backface of the front side */
  display: flex;
  justify-content: center;
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

const CardSubtitle = styled.div`
  color: ${rgba("#090C22", 0.57)};
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

class FlipCard extends Component {
  constructor(props) {
    super(props);
    this.state = { isFlipped: false };
  }

  handleCardClick = () => {
    this.setState({ isFlipped: !this.state.isFlipped });
  };

  render() {
    const { isFlipped } = this.state;
    return (
      <Wrapper>
        <Card onClick={this.handleCardClick} style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)" }}>
          <CardFront>
            <CardContent>
              <CardTitle>Destination</CardTitle>
              <CardSubtitle>Book your next trip</CardSubtitle>
            </CardContent>
          </CardFront>
          <CardBack>
            <CardContent>
              <CardTitle>Back Side</CardTitle>
              <CardSubtitle>This is the back side of the card</CardSubtitle>
            </CardContent>
          </CardBack>
        </Card>
      </Wrapper>
    );
  }
}

export default FlipCard;
