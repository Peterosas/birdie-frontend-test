import * as React from 'react'
import styled from 'styled-components';

const MainContentSection = styled.div`
  text-align: center;
  margin-top: 15%;
`;

const MainContent = () => {
  return(
    <MainContentSection>
      <h2>Please wait while we finish deploying site...</h2>
    </MainContentSection>
  );
}


export default MainContent;