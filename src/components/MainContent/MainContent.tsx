import React, { useState } from 'react'
import { Timeline } from '../UI/Timeline';
import styled from 'styled-components';
import { Table } from '../UI/Table';
import { useAppSelector } from '../../hooks';
import { RootState } from '../../redux/store';



const MainContentSection = styled.div`
  text-align: center;
  width: 80%;
  margin: 5% auto;
`;




const MainContent = () => {
  const [activeId] = useState<number>(1);
  const patientsReducer: RootState = useAppSelector(state => state.patients);
  
  return(
    <MainContentSection>
      {activeId === 0 && <Timeline />}
      
      {activeId === 1 && <Table 
        headers={["Patient ID", "Event Type", "Patient Mood", "Care Giver Id", "Date"]} 
        data={patientsReducer.patients} 
      />}
    </MainContentSection>
  );
}


export default MainContent;