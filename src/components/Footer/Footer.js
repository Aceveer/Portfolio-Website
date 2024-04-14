import React from 'react';
import { FaFacebookSquare, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

const IconWrapper = styled.div`
  margin-bottom: 10px;
`;

const FooterText = styled.p`
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <IconWrapper>
        <a href="https://www.facebook.com/profile.php?id=100095169572150"><FaFacebookSquare size={24} style={{ marginRight: '10px',  color: '#00FFAA' }} /></a>
        <a href="https://www.instagram.com/tannuakram/"><FaInstagram size={24} style={{ marginRight: '10px',  color: '#00FFAA' }} /></a>
        <a href="https://github.com/Aceveer/"><FaGithub size={24} style={{ marginRight: '10px',  color: '#00FFAA' }} /></a>
        <a href="https://www.linkedin.com/in/tannuakram/"><FaLinkedin size={24} style ={{ color: '#00FFAA'}} /></a>
      </IconWrapper>
      <FooterText>All Rights Reserved. Credit to <a href = "https://www.linkedin.com/in/prachi-kapasi-07676629/" style ={{ color: '#00FFAA'}}>Prx</a> for designing, <a href="https://www.linkedin.com/in/frontendjoe/?originalSubdomain=uk" style ={{ color: '#00FFAA'}}>Joe Harrison</a> for his components that helped me design this website</FooterText>
    </FooterContainer>
  );
};

export default Footer;
