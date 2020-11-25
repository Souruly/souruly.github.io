import styled from "styled-components/macro"

export const ParentContainer = styled.div`
  font-family: "Castoro", serif;

  display: flex;
  flex-direction: row;
  
  width: min(800px, 90%);
  margin:auto;
  align-items: center;
  justify-content: center;
  padding: 10px;

  box-shadow: 2px 2px 4px;
  
  @media (max-width: 600px) {
    flex-direction: column;
    width: auto;
    box-shadow: none;
  }
`
export const Image = styled.img`
  border-radius: 10%;

  @media (max-width: 600px) {
    border-radius: 50%;
  }
`

export const Information = styled.div`
  display: flex;
  flex-direction : column;
  align-items: left;
  justify-content: center;
  margin : 10px;
  padding: 10px;
`
