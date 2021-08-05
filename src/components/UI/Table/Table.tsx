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
  background-color: #87a0bb;
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
`;

interface IHeaderProps {
  headers?: string[];
  data?: string[];
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
        <TableRow>
          {data?.map(item => (
              <TableData key={item}>
                {item}
              </TableData>
          ))}
        </TableRow>
      </TableBodySection>
    </TableSection>
  );
}

export default Table;
