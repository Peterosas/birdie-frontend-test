import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: red
`;

const Header = () => {
  return (
    <Container><h1>Header</h1></Container>
  );
}

export default Header;
