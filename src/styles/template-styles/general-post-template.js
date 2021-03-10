import styled from "styled-components/macro"

export const PostPage = styled.div`
  font-family: "Castoro", serif;
  display: flex;
  flex-direction: column;
  width: min(800px, 90%);
  margin: auto;
  box-shadow: 5px 10px 10px;

  @media (max-width: 600px) {
    font-size: 2rem;
    width: auto;
    box-shadow: none;
  }

  a {
    font-size : 1rem;
  }

`
export const PostPageHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    font-size: 2rem;
    width: auto;
    box-shadow: none;
  }
`

export const PostTitle = styled.h1`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  margin: 20px;

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`

export const PostSubTitle = styled.ul`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  margin-bottom: 0px;
  padding: 0px;
  list-style: none;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 80%;
    font-size: 1rem;
    padding-left: 0px;
    margin-bottom: 0px;
  }
`

export const PostContent = styled.div`
  margin: 20px;
  margin-top: 0px;
  word-wrap: break-word;
  font-family: 'Roboto Slab', serif;

  code {
    color: orange;
    background: var(--customDarkGrey);
    padding: 0 5px;
  }

  pre {
    background: var(--customDarkGrey);
    padding: 5px;
    max-width: 800px;
    margin: none;
  }

  @media (max-width: 600px) {
    pre {
      width: 100%;
    }
  }

  p {
    font-size : 1rem;
  }

  li {
    font-size : 1rem;
  }
`
