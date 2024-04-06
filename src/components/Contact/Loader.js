import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #007bff;
  animation: ${spinAnimation} 1s linear infinite;
`;

const Loader = () => {
  return <LoaderContainer />;
};

export default Loader;
