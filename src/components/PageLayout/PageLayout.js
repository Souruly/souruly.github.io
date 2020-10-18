import React from "react"
import { Navbar } from "../index"
import { Footer } from "./styles/PageLayoutStyle"
import { GlobalStyles, BigTitle } from "../../styles/global-styles"


export default function index({ children, title , ...restProps}) {
  return (
    <>
      <GlobalStyles/>
      <Navbar />
      <BigTitle>{title}</BigTitle>
        {children}
      <Footer>Footer</Footer>
    </>
  )
}
  