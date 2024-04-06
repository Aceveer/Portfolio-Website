import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaDiscord, FaLinkedin } from 'react-icons/fa';
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
        <a href="https://facebook.com"><FaFacebook size={24} style={{ marginRight: '10px' }} /></a>
        <a href="https://instagram.com"><FaInstagram size={24} style={{ marginRight: '10px' }} /></a>
        <a href="https://github.com"><FaGithub size={24} style={{ marginRight: '10px' }} /></a>
        <a href="https://discord.com"><FaDiscord size={24} style={{ marginRight: '10px' }}/></a>
        <a href="https://linkedin.com"><FaLinkedin size={24} /></a>
      </IconWrapper>
      <FooterText>All Rights Reserved. Credit to Prx for designing, frontendjoe for his various components that helped me design this website</FooterText>
    </FooterContainer>
  );
};

export default Footer;
