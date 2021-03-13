import React from "react"
import { PageLayout } from "../components"
import {
  Container,
  Quote,
  IconsDock,
  ProjectsLink,
  GithubLink,
  GoogleScholarLink,
  InstagramLink,
  StravaLink,
  GmailLink,
} from "../styles/page-styles/homepage"
import { GiComputing } from "react-icons/gi"
import { FaGithub, FaFileAlt, FaCameraRetro, FaEnvelope } from "react-icons/fa"
import { BiRun } from "react-icons/bi"
import { Link } from "gatsby"

export default function Home() {
  return (
    <PageLayout bigTitle="Sourav Kulkarni">
      <br></br>
      <Container>
        <Quote>
          “All the world's a stage, and all the men and women merely players:
          they have their exits and their entrances; and one man in his time
          plays many parts, his acts being seven ages.”
        </Quote>
        <IconsDock>
          <li>
            <ProjectsLink as={Link} to="/projects">
              <GiComputing />
            </ProjectsLink>
          </li>
          <li>
            <GithubLink href="https://github.com/Souruly/" target="_black">
              <FaGithub />
            </GithubLink>
          </li>
          <li>
            <GoogleScholarLink
              href="https://scholar.google.com/citations?user=1hTgvIIAAAAJ&hl=en"
              target="_black"
            >
              <FaFileAlt />
            </GoogleScholarLink>
          </li>
          <li>
            <InstagramLink
              href="https://www.instagram.com/souravkulkarni/"
              target="_black"
            >
              <FaCameraRetro />
            </InstagramLink>
          </li>
          <li>
            <StravaLink
              href="https://www.strava.com/athletes/24862313"
              target="_black"
            >
              <BiRun />
            </StravaLink>
          </li>
          <li>
            <GmailLink href="mailto:souruly@gmail.com" target="_black">
              <FaEnvelope />
            </GmailLink>
          </li>
        </IconsDock>
      </Container>
    </PageLayout>
  )
}
