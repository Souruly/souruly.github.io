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
  const quotes = ["“All the world's a stage, and all the men and women merely players: they have their exits and their entrances; and one man in his time plays many parts, his acts being seven ages.”", 
  "‘Tell me,’ the great twentieth-century philosopher Ludwig Wittgenstein once asked a friend, ‘why do people always say it was natural for man to assume that the sun went round the Earth rather than that the Earth was rotating?’ His friend replied, ‘Well, obviously because it just looks as though the Sun is going round the Earth.’ Wittgenstein responded, ‘Well, what would it have looked like if it had looked as though the Earth was rotating?’"];

  const quote = quotes[Math.floor(Math.random()*quotes.length)];

  return (
    <PageLayout bigTitle="Sourav Kulkarni">
      <br></br>
      <Container>
        <Quote>
          {quote}
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
