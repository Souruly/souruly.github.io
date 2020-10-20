import React from "react"
import { Container } from "../styles/global-styles"
import { PageLayout } from "../components"
import birdsList from "../../static/mydata/birds.json"

import { StyledTable } from "../styles/page-styles/birdsList"

export default function Home() {
  const TableRow = bird => (
    <tr key={bird.id}>
      <td>{bird.species}</td>
      <td>{bird.location}</td>
      <td>{bird.rarity}</td>
      <td>{bird.characteristics}</td>
    </tr>
  )

  const headings = birdsList.columns.map(heading => <th>{heading.label}</th>)
  const birds = birdsList.rows.map(bird => TableRow(bird))
  return (
    <PageLayout bigTitle="Birds">
      <Container>
        <StyledTable>
          <tr>{headings}</tr>
          {birds}
        </StyledTable>
      </Container>
    </PageLayout>
  )
}
