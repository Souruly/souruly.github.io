import styled from "styled-components/macro"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
`

export const Quote = styled.p`
  font-family: "Castoro", serif;
  width: 80%;
  font-size: 1.6rem;
  font-style: italic;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`

export const IconsDock = styled.ul`
  font-family: "Castoro", serif;
  font-size: 3rem;
  text-align: center;
  list-style: none;

  padding: 10px;
  position: fixed;
  bottom: 0;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }

  li {
    position: relative;
    display: inline-block;
    margin: 10px;
  }

  a {
    color: black;
    border: grey;
    padding: 18px 20px;
    transition: 500ms linear;
  }
`

export const ProjectsLink = styled.a`
  :hover {
    color: #0033cc;
  }
`
export const GithubLink = styled.a`
 :hover {
    color: #5900b3;
  }
`
export const GoogleScholarLink = styled.a`
  :hover {
    color: #4d79ff;
  }
`
export const InstagramLink = styled.a`
  :hover {
    color: #4c0080;
  }
`
export const StravaLink = styled.a`
  :hover {
    color: #ff3300;
  }
`
export const GmailLink = styled.a`
  :hover {
    color: #b30000;
  }
`
