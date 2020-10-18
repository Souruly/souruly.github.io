import { createGlobalStyle } from "styled-components"
import styled from "styled-components/macro"
import "normalize.css"

export const GlobalStyles = createGlobalStyle`
  * {
    scrollbar-width: thin;
    scrollbar-color: blue orange;
  }

  html, body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif!important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: rgb(240,240,240);
    color: #333333;
    font-size: 16px;
  }
  
  body::-webkit-scrollbar {
    width: 10px;
  }
  body::-webkit-scrollbar-track {
    background: rgba(21,21,21);
  }
  body::-webkit-scrollbar-thumb {
    background-color: rgb(192,192,192);
    border-radius: 50px;
    border: 3px solid rgba(21,21,21);
  }
`

export const BigTitle = styled.h1`
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
