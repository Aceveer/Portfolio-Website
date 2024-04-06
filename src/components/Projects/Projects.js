import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 3rem;
`;

const Description = styled.p`
  color: #fff;
`;

const Projects = () => {
  return (
    <Wrapper id="projects">
      <Title>Projects</Title>
      <Description>Currently under development</Description>
    </Wrapper>
  );
};

export default Projects;
