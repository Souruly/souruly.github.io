import React, { useState } from "react"
import { WordInfoButton, DivButton, TrainingDiv, Word, WordInfo, Type, Meaning, Example, Translation } from "./styles/wordTrainer"

export default function WordTrainer({ data }) {
  const [word, setWord] = useState(data[0]);
  const [wordInfoVisibility, setWordInfoVisibility] = useState(
      {value: false, visClassName: "invisible"}
    )

  const getNewWord = function()
  {
    let randomWord = data[Math.floor(Math.random() * data.length)]
    setWord(randomWord)
  }

  const toggleWordInfoVisibility = function()
  {
    let visVal = !wordInfoVisibility.value
    let visClass = ""

    if(visVal)
    {
      visClass = "visible"
    }
    else{
      visClass = "invisible"
    }

    setWordInfoVisibility(
      {value: visVal, visClassName: visClass}     
      )
      console.log(wordInfoVisibility)
  }

  return (
    <>
    <WordInfoButton onClick={() => toggleWordInfoVisibility()}>Show Word Info</WordInfoButton>
      <DivButton onClick={() => getNewWord()}>
        <TrainingDiv>
            <Word>{word.word}</Word>
            <WordInfo className={wordInfoVisibility.visClassName}>
                <Type>{word.wordType}</Type>
                <Meaning>{word.meaning}</Meaning>
                <Example>{word.example}</Example>
                <Translation>{word.translation}</Translation>
            </WordInfo>
        </TrainingDiv>
      </DivButton>
    </>
  )
}
