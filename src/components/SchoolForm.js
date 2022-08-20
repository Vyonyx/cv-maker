import React, { useState } from 'react'
import uniqid from 'uniqid'
import { ListForm } from './FormMethods'
import { ListInput } from './Inputs'
import { NavButtons } from './GeneralComponents'

import { StyledMainForm, StyledHistory } from './styles/StyledForms.styled'

function SchoolForm({ history, addToHistory }) {
  const [degree, setDegree] = useState('')
  const [school, setSchool] = useState('')
  const [description, setDescription] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  let details = { degree, school, description, from, to }
  const cbArray = [setDegree, setSchool, setDescription, setFrom, setTo]

  const changeTextState = (e, cb) => {
    cb(e.target.value)
  }

  const resetState = () => {
    cbArray.forEach((cb) => cb(''))
  }

  const submitToHistory = () => {
    addToHistory([...history, details])
    resetState()
  }

  const removeFromHistory = (degree, school) => {
    const found = history.find((item) => item.school)
    const updatedHistory = history.filter((item) => item !== found)
    addToHistory(updatedHistory)
  }

  return (
    <StyledMainForm>
      <div>
        <label>Degree:</label>
        <input
          onChange={(e) => changeTextState(e, setDegree)}
          value={degree}
        ></input>
      </div>
      <div>
        <label>School:</label>
        <input
          onChange={(e) => changeTextState(e, setSchool)}
          value={school}
        ></input>
      </div>
      <div>
        <label>Description:</label>
        <input
          onChange={(e) => changeTextState(e, setDescription)}
          value={description}
        ></input>
      </div>
      <div>
        <label>From:</label>
        <input
          onChange={(e) => changeTextState(e, setFrom)}
          value={from}
        ></input>
      </div>
      <div>
        <label>To:</label>
        <input onChange={(e) => changeTextState(e, setTo)} value={to}></input>
      </div>
      <NavButtons type="button" onClick={submitToHistory}>
        Add Degree
      </NavButtons>
      {history.length > 0 && (
        <StyledHistory>
          {history.map((item) => {
            const { degree, school } = item
            return (
              <li key={uniqid()}>
                {degree} - {school}
                <NavButtons
                  type="button"
                  onClick={() => removeFromHistory(degree, school)}
                >
                  X
                </NavButtons>
              </li>
            )
          })}
        </StyledHistory>
      )}
    </StyledMainForm>
  )
}

export default SchoolForm
