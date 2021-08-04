import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.svg';

const HeaderSection = styled.div`
  background-color: #fff;
  margin: 0;
  padding: 16px;
  border-bottom: 2px solid #54c6c1;
  display: flex;
  flex-wrap: wrap-reverse;
`;



const LogoSection = styled.div`
  flex: 2
`;

const RightPad = styled.div`
  flex: 2
`;

const SearchBox = styled.input`
  flex: 2;
  box-sizing: border-box;
  outline: none;
  padding: 6px 12px;
  background-color: #fafafa;
  background-image: none;
  border: 1px solid #b2d1d0;
  border-radius: 4px;
  box-shadow: none;
`;

const LogoImage = styled.img`
  width: 100px
`;


const Header = () => {
  return (
    <HeaderSection>
      <LogoSection>
        <LogoImage alt="Birdie Test" src={Logo} />
      </LogoSection>
      <SearchBox placeholder="Filter Search..." />
      <RightPad />
    </HeaderSection>
  );
}

export default Header;
