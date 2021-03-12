import React from "react"
import { PageLayout } from "../components"
import {
  Image,
  LogoImage,
  Information,
  CenterContainer,
  ParentContainer,
  SecondaryContainer,
  Experience,
} from "../styles/page-styles/about"
import { Link } from "gatsby"

export default function About() {
  return (
    <PageLayout bigTitle="About Me">
      <CenterContainer>
        <ParentContainer>
          <Image
            width="340"
            height="340"
            src={`../../mydata/profilePicture.jpg`}
            alt="Sourav Kulkarni"
          />
          <Information>
            <p>Hello,</p>
            <p>
              My name is <b>Sourav Kulkarni</b>. I am a Computer Science student at 
              RWTH Aachen studying MSc Media Informatics.
            </p>
            <p>
              In my spare time you will most likely find me on local trails or
              wildlife hotspots with my <a href="https://www.instagram.com/souravkulkarni/" target="_blank">camera</a>. Occasionally, I read books or
              play some musical instruments....
            </p>
            <p>
              Check out my <Link to="/projects">projects</Link> to see what I've
              been up to! Or check out my <Link to="/blog">blog</Link> to see
              what's recently caught my eye!
            </p>
          </Information>
        </ParentContainer>
        <SecondaryContainer>
          <h1>Experience</h1>
          <br></br>
          <Experience>
            <CenterContainer>
              <LogoImage
                width="200"
                src={`../../mydata/Barclays.png`}
                alt="Barclays"
              />
              <br></br> 
              <p>August 2019 - April 2020</p>
            </CenterContainer>
            <Information>
              <p>Software Developer in the Wholesale Credit Risk team at the  RFT Department.</p><p> Technologies used : JAVA, Angular, JIRA, Git</p>
            </Information>
          </Experience>
          <Experience>
            <CenterContainer>
              <LogoImage
                height="200"
                src={`../../mydata/IMD.png`}
                alt="IMD"
              />
              <br></br> 
              <p>September 2018 - May 2019</p>
            </CenterContainer>
            <Information>
              <p>Project Intern under Dr. A. K. Srivastava for weather data analysis.</p><p> Dataset : IMD + IITM Hourly Weather Data 1967-2017</p><p> Technologies used : Python</p>
            </Information>
          </Experience>
        </SecondaryContainer>
      </CenterContainer>
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
