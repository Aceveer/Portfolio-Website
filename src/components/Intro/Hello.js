import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HelloWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
  animation: ${fadeIn} 2s ease-in-out;
`;

const HelloText = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #yellow;
`;

const SubText = styled.div`
  margin-top: 10px;
  color: #yellow;
  font-size: 1.5rem;
`;

const Hello = (text1, text2,text3) => {
  return (
    <HelloWrapper>
      <HelloText>Hey there,</HelloText>
      <HelloText>My name is Tanveer Akram!</HelloText>
      <SubText>Thanks for visiting my site!</SubText>
    </HelloWrapper>
  );
};

export default Hello;
