import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  text-align: center;
  padding: 8px;
`;

const FooterText = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, .65);

`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterText><strong>Birdie</strong> Technical Test Designed by <strong>Peter Erhunmwunse</strong> - &copy; {new Date().getFullYear()}</FooterText>
    </FooterSection>
  );
}

export default Footer;
