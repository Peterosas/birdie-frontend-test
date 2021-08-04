import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainContent } from './components/MainContent';

 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #f7f8fb;
    color: rgba(0,0,0,.65);
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;


const AppSection = styled.div`
  background-color: transparent
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppSection>
        <Header />
        <MainContent />
        <Footer />
      </AppSection>
    </>
  );
}

export default App;
