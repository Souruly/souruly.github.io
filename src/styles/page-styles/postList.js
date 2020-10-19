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
    display:flex;
    flex-direction:column;
    width: 80%;
    align-items : center;
    justify-content : center;
    border: 2px solid black;
    margin: 10px;
    height: 6rem;
    transition: all 0.05s ease 0s;

    :hover {
        border: 6px solid var(--customDarkGrey);
    }

    a {
        text-decoration:none;
        color:var(--customDarkGrey);
    }
`


export const PostList = styled.ul`

`

export const PostListItem = styled.li`
    
`