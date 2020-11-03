import styled from "styled-components/macro"

export const StyledTable = styled.table`
  width: 90%;
  max-width : 800px;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
  text-align: center;
  font-weight: normal;

  th,
  td {
    border: 1px solid black;
  }

  
  tbody tr:nth-child(4n+1) {
    background-color: lightGrey;
  }
  
  @media (max-width: 600px) {
    tbody tr:nth-child(4n+3) {
      background-color: lightGrey;
    }

    tbody tr:nth-child(4n+4) {
      background-color: lightGrey;
    }

    tbody tr:nth-child(4n+1) {
      background-color: inherit;
    }

    tbody tr:nth-child(4n+2) {
      background-color: inherit;
    }
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

  td.itemNotesCell p{
    @media (max-width: 600px) {
      display:none;
    }
  }

  tr.itemNotesRow{
    display:none;
    @media (max-width: 600px) {
      display:revert;
      border-bottom: 2px solid black;    
    }
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