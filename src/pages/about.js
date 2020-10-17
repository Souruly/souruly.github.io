import React from "react"
import { PageLayout } from "../components"
import { GlobalStyles, BigTitle } from "../styles/global-styles"
// import Image from "react-bootstrap/Image"
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Container, Text } from "../styles/page-styles/about/about"
import { Link } from "gatsby"

export default function About() {
  return (
    <PageLayout>
      <GlobalStyles />
      <BigTitle>About Me</BigTitle>
      <Container>
        <Image
          fluid
          roundedCircle
          width="340"
          height="340"
          src={`../../mydata/profilePicture.jpg`}
          alt="Sourav Kulkarni"
        />
      </Container>

      <Container>
        <p>
          Hello there! My name is <b>Sourav Kulkarni</b>. I am a computer science
          student current waiting for my MSc Media Informatics course to start in
          RWTH Aachen.
        </p>
        <p>
          In my spare time you will most likely find me on local trails or
          wildlife hotspots with my camera. Occasionally, I read books or play
          some musical instruments....
        </p>
        <p>
          Check out my <Link to="/projects">projects</Link> to see what I've been
          up to! Or check out my <Link to="/blog">blog</Link> to see what's
          recently caught my eye!
        </p>
      </Container>
    </PageLayout>
  )
}

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         author
//         designations
//       }
//     }
//   }
// `
