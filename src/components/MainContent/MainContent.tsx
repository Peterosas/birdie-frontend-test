import * as React from 'react'
import { Timeline } from '../UI/Timeline';
import styled from 'styled-components';

const MainContentSection = styled.div`
  text-align: center;
  margin-top: 5%;
`;



const MainContent = () => {
  return(
    <MainContentSection>
      <Timeline />
    </MainContentSection>
  );
}


export default MainContent;