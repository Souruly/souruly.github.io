import styled from "styled-components/macro"

export const BirdRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid var(--customDarkGrey);
  width: 60%;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: space-around;
    width:95%;
  }
`
export const Image = styled.img`
  padding: 10px;
  height: auto;
  width: 40%;

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const Species = styled.a`

`

export const Location = styled.a``
