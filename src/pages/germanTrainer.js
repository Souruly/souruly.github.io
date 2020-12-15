import React from 'react';
import { PageLayout, WordTrainer } from "../components"
import { Container } from "../styles/global-styles"
import { germanWords } from "../listData/germanWordsList"

export default function Home() {
  return (
    <PageLayout bigTitle="German Flash Cards">
        <Container>
            <WordTrainer data={germanWords.rows} />
            <p>Click on the card to get the next word</p>
        </Container>
    </PageLayout>
  )
}
