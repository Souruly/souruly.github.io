import styled from "styled-components/macro"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

export const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: left;
  justify-content: center;
  border: 1px solid black;
  margin: 10px;
  height: auto;
  transition: all 0.05s ease 0s;
  padding: 10px;

  :hover {
    box-shadow: 2px 4px 10px;
  }

  a {
    text-decoration: none;
    color: var(--customDarkGrey);
  }
`

export const PostTitle = styled.h3`
  font-size: 2rem;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`
