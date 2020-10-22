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
    border: none;
    outline: none;
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
    content: " ↕";
  }

  thead button.ascending::after {
    content: " ↓";
  }

  thead button.descending::after {
    content: " ↑";
  }

  tbody {
    width: 90%;
  }
`

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  padding: 1rem;

  table {
    border: 2px solid black;
    text-align : center;
    width : 90%;
    max-width : 800px;

    th{ 
      background : var(--customDarkGrey);
      color: white;
    }

    th,
    td {
      border 1px solid black;
      margin: 0;
      padding: 0.5rem;
    }
  }
`