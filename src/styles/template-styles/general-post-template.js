import styled from "styled-components/macro"

export const PostTitle = styled.h1`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  margin: 20px;
  font-style: italic;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`

export const PostSubTitle = styled.ul`
  display: flex;
  flex-direction:row;
  width: 25%;
  justify-content: space-between;
  align-items: center;
  margin:auto;
  padding: 0px;
  list-style:none;
  font-weight: bold;

  @media (max-width: 1000px) {
    width:80%;
    flex-direction:column;
    font-size: 1rem;
    font-weight: normal;
  }
`

export const PostContent = styled.div`
  margin:20px;

  code {
    color:orange;
    background: var(--customDarkGrey);
    padding: 0 5px;
  }

  pre {
    background: var(--customDarkGrey);
    padding: 5px;
    max-width: 800px;
    margin:none;
  }

  @media (max-width: 600px) {
    pre {
        width:100%;
      }
  }
`