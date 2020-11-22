import React from 'react';
import { PageLayout, WordTrainer } from "../components"
import { Container } from "../styles/global-styles"
import { germanWords } from "../listData/germanWordsList"

export default function Home() {
  return (
    <PageLayout bigTitle="German Trainer">
        <Container>
            <WordTrainer data={germanWords.rows} />
        </Container>
    </PageLayout>
  )
}
