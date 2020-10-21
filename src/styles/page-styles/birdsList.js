import styled from "styled-components/macro"

export const StyledTable = styled.table`
  width: 90%;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
  text-align: center;
  font-weight: normal;

  th,
  td {
    border: 1px solid black;
  }

  tr:nth-child(even) {
    background-color: lightGrey;
  }

  thead {
    text-align: center;
    background: var(--customDarkGrey);
  }

  thead button:focus {
    border:none;
    outLine: none;
    background: white;
    color: var(--customDarkGrey);
  }

  thead button {
    text-align: center;
    border: none;
    background: none;
    color: white;
  }

  thead button::after {
    content: ' ↕';
  }

  thead button.ascending::after {
    content: ' ↓';
  }

  thead button.descending::after {
    content: ' ↑';
  }

  tbody {
    width: 90%;
  }
`
