import React from "react"
import { Navbar } from "../index"
import { Footer } from "./styles/PageLayoutStyle"
import { GlobalStyles, BigTitle, MediumTitle, SmallTitle } from "../../styles/global-styles"


export default function index({ children, bigTitle , mediumTitle, smallTitle, ...restProps}) {
  return (
    <>
      <GlobalStyles/>
      <Navbar />
      <BigTitle>{bigTitle}</BigTitle>
      <MediumTitle>{mediumTitle}</MediumTitle>
      <SmallTitle>{smallTitle}</SmallTitle>
        {children}
      <br/>
      <Footer>Sourav Kulkarni | 2020</Footer>
    </>
  )
}
  