import React from "react"
import { Navbar } from "../index"
import { Footer } from "./styles/PageLayoutStyle"
import { GlobalStyles, BigTitle, MediumTitle } from "../../styles/global-styles"


export default function index({ children, bigTitle , mediumTitle, ...restProps}) {
  return (
    <>
      <GlobalStyles/>
      <Navbar />
      <BigTitle>{bigTitle}</BigTitle>
      <MediumTitle>{mediumTitle}</MediumTitle>
        {children}
      <Footer>Sourav Kulkarni | 2020</Footer>
    </>
  )
}
  