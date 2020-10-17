import { createGlobalStyle } from "styled-components"
import styled from "styled-components/macro"
import "normalize.css"

export const GlobalStyles = createGlobalStyle`
  html, body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif!important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(240,240,240);
  color: #333333;
  font-size: 16px;
}`

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
