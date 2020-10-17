import React from "react"
import { Navbar } from "../index"
import { Footer } from "./styles/PageLayoutStyle"

export default function index({ children }, ...restProps) {
  return (
    <>
      <Navbar />
        {children}
      <Footer>Footer</Footer>
    </>
  )
}
  