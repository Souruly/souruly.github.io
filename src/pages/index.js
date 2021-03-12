import React from "react"
import { PageLayout } from "../components"
import { ImageContainer } from "../styles/page-styles/homepage"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <PageLayout
      bigTitle="Sourav Kulkarni"
      smallTitle="(This website is still under construction)"
    >
      {/* <ImageContainer>
        <StaticImage
          src="../images/unicycle.jpeg"
          alt="Unicycle"
          placeholder="blurred"
        />
      </ImageContainer> */}
    </PageLayout>
  )
}
