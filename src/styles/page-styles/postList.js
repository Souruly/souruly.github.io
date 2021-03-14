import styled from "styled-components/macro"

export const Container = styled.div`
  font-family: "Castoro", serif;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: auto;

  @media (max-width: 600px) {
    flex-direction: column;
    font-size: 3rem;
  }

  .starred {
    border: 2px solid black;
  }
`

export const PostCard = styled.div`
  //display: flex;
  //flex-direction: column;
  position: relative;
  width: min(80%, 400px);
  align-items: left;
  justify-content: center;
  border: 1px solid black;
  margin: 10px;
  height: 200px;
  transition: all 0.05s ease 0s;
  padding: 10px;
  border-radius: 15px;

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
    font-size: 1.6rem;
  }
`

export const Star = styled.div`
  position: absolute;
  right: 5px;
  top: -5px;
  font-size : 1rem;
  :after {
    content: "★";
  }
`

export const PostDate = styled.h5`
  font-size: 1.2rem;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`

export const PostDescription = styled.h5`
  word-wrap: break-word;
  text-overflow: ellipsis;
  //white-space: nowrap;
  overflow: hidden;

  font-size: 1.2rem;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`

export const PostList = styled.ul``

export const PostListItem = styled.li``
