import React from "react"
import { Container } from "../styles/global-styles"
import { PageLayout } from "../components"
import birdsList from "../../static/mydata/birds.json"

import {
  BirdRow,
  Image,
  Location,
  Species,
} from "../styles/page-styles/birdsList"

export default function Home() {
  const Row = bird => (
    <BirdRow key={bird.id}>
      <Image fluid src={bird.imgLink} alt={bird.birdName} />
      <Species href={bird.birdLink}>{bird.birdName}</Species>
      <Location href={bird.locationLink}>{bird.location}</Location>
    </BirdRow>
  )

  const birds = birdsList.map(bird => Row(bird))
  return (
    <PageLayout bigTitle="Birds">
      <Container>{birds}</Container>
    </PageLayout>
  )
}
