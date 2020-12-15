import styled from "styled-components/macro"

export const DivButton = styled.button`
  background-color: #dcdcdc;
  font-family: 'Castoro', serif;
  width: 90%;
  text-align: center;
  border: 2px solid black;
`

export const WordInfoButton = styled.button`
  width: 90%;
  text-align: center;
  border: 2px solid black;
`

export const TrainingDiv = styled.div`
  width: 100%;
  text-align: center;
`

export const Word = styled.h1`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  margin: 5px;
  padding: 10px;

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`

export const WordInfo = styled.div`
  display: flex;
  flex-direction: column;

  .invisible {
    visibility: hidden;
  }
`

export const Meaning = styled.h2`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  margin: 5px;
  padding: 10px;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`

export const Example = styled.h4`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 5px;
  margin-bottom: 1px;
  padding: 10px;
  padding-bottom: 1px;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`

export const Translation = styled.h4`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-style: italic;
  margin: 5px;
  margin-top: 1px;
  padding: 10px;
  padding-top: 1px;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`

export const Type = styled.p`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin: 2px;
  padding: 4px;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`
