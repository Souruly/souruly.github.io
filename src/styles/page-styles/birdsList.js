import styled from "styled-components/macro"

export const StyledTable = styled.table`
  width:90%;
  padding:10px;
  margin:10px;
  border: 1px solid black;
  text-align: center;
  font-weight : normal;

  th, td {
    border: 1px solid black;
  }

  tr:nth-child(even) {
    background-color: lightGrey;
  }
`;
