import React, { useEffect, useState } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainContent } from './components/MainContent';

import LoadingOverlay from 'react-loading-overlay-ts';
import { getAllPatients } from './redux/actions/patient.actions';

 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #eefcfc;
    color: rgba(0,0,0,.65);
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 14px;
  }

  ._loading_overlay_overlay {
    position: fixed;
  }

  ._loading_overlay_spinner {
    color: #54c6c1;
  }

  button.active {
    background-color: #54c6c1;
    color: #fff;
    border-radius: 4px;
  }
`;


const AppSection = styled.div`
  position: relative;
  background-color: transparent;
  height: 100vh;
`;

const App = () => {
  const [isLoading] = useState<boolean>(true);

  useEffect(() => {
      (async () => {
        await getAllPatients();
      })();

  }, []);

  return (
    <>
      <GlobalStyle />
      <AppSection>
        <LoadingOverlay
          active={isLoading}
          spinner
          text='Please wait... setting up the pace!'
        >
          <Header />
          <MainContent />
          <Footer />
        </LoadingOverlay>
      </AppSection>
    </>
  );
}

export default App;
