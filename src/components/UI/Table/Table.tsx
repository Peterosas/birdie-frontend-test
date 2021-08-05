import React from 'react';
import styled from 'styled-components';

const TableSection = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHeaderSection = styled.thead`
  
`;

const TableHeading = styled.th`
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #54c6c1;
  color: #fff;
  :first-child {
    border-top-left-radius: 8px;
  }
  :last-child {
    border-top-right-radius: 8px;
  }
`;

const TableBodySection = styled.tbody`
  background: #fff;
`;

const TableRow = styled.tr`
  :hover {background-color: #fff;};
`;

const TableData = styled.td`
  padding: 8px;
  text-align: left;
`;

interface IHeaderProps {
  headers?: string[];
  data?: {care_recipient_id: string, event_type: string, caregiver_id: string, mood: string, timestamp: string}[] | null;
}
const Table = ({headers, data} : IHeaderProps) => {
  return (
    <TableSection>
      <TableHeaderSection>
        <TableRow>
          {headers?.map(item => (
              <TableHeading key={item}>
                {item}
              </TableHeading>
          ))}
        </TableRow>
      </TableHeaderSection>

      <TableBodySection>
      {data?.map(item => (
        <TableRow>
              <TableData>
                {item.care_recipient_id}
              </TableData>
              <TableData>
                {item.event_type}
              </TableData>
              <TableData>
                {item.mood?? 'N/A'}
              </TableData>
              <TableData>
                {item.caregiver_id}
              </TableData>
              <TableData>
                {item.timestamp}
              </TableData>
        </TableRow>
        ))}
      </TableBodySection>
    </TableSection>
  );
}

export default Table;
