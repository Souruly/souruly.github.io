import styled from "styled-components/macro"

export const Name = styled.h1`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: center;
  font-size: 10rem;
  margin: 5px;
  padding: 10px;

  @media (max-width: 600px) {
    font-size: 5rem;
  }
`
