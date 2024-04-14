import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Section = styled.section`
  padding: 20px;
  animation: ${fadeIn} 2s ease-in-out;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.span`
  font-size: 16px;
  color: #aaa;
`;

const ResumeViewer = styled.div`
  width: 100%;
  height: 650px;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const Button = styled.button`
  background-color: #00ffaa;
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px auto;
  display: block;
`;

const Resume = () => {
  const [showResume, setShowResume] = useState(false);

  const toggleResume = () => {
    setShowResume((prevShowResume) => !prevShowResume);
  };

  return (
    <Section>
      <Container>
          <Title>Resume</Title>
          <Description>Please click the button to view my resume.</Description>
          <Button onClick={toggleResume}>{showResume ? 'Close Resume' : 'View Resume'}</Button>
          <ResumeViewer show={showResume}>
            <object
              data="Resume.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
            >
              <p>
                Unfortunately the browser/device is not compatible to open the PDF.<br/>Please download the PDF to view it.<br/>Thank you! <a href="Resume.pdf" download>Download PDF</a>.
              </p>
            </object>
          </ResumeViewer>
      </Container>
    </Section>
  );
};

export default Resume;
