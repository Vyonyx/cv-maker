import React, { useState } from 'react'
import uniqid from 'uniqid'
import { StyledSecondaryForm, StyledHistory } from './styles/StyledForms.styled'
import { StyledButtonInput } from './styles/Inputs.styled'
import { SmallButtons } from './GeneralComponents'

function HobbiesForm({ history, addToHistory }) {
  const [newSkill, setNewSkill] = useState('')

  const submitToHistory = () => {
    addToHistory([...history, newSkill])
    setNewSkill('')
  }

  const removeFromHistory = (skill) => {
    const found = history.find((item) => item === skill)
    const updatedHistory = history.filter((item) => item !== found)
    addToHistory(updatedHistory)
  }

  return (
    <StyledSecondaryForm>
      <StyledButtonInput>
        <label>Hobbies:</label>
        <input
          onChange={(e) => setNewSkill(e.target.value)}
          value={newSkill}
        ></input>
        <SmallButtons onClick={submitToHistory}>+</SmallButtons>
      </StyledButtonInput>
      {history.length > 0 && (
        <StyledHistory>
          {history.map((item) => (
            <li key={uniqid()}>
              {item}
              <button onClick={(e) => removeFromHistory(item)}>X</button>
            </li>
          ))}
        </StyledHistory>
      )}
    </StyledSecondaryForm>
  )
}

export default HobbiesForm
