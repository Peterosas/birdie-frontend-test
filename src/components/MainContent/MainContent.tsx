import React, { useState } from 'react'
import { Timeline } from '../UI/Timeline';
import styled from 'styled-components';
import { Table } from '../UI/Table';


const MainContentSection = styled.div`
  text-align: center;
  width: 80%;
  margin: 5% auto;
`;




const MainContent = () => {
  const [activeId] = useState<number>(1);
  return(
    <MainContentSection>
      {activeId === 0 && <Timeline />}
      {activeId === 1 && <Table 
        headers={["Patient ID", "Patient Name", "Care Giver Id"]} 
        data={["Patient ID", "Patient Name", "Care Giver Id"]} 
      />}
    </MainContentSection>
  );
}


export default MainContent;