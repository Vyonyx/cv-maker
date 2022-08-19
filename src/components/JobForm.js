import React, { useState } from 'react'
import uniqid from 'uniqid'
import { ListForm } from './FormMethods'
import { NavButtons } from './GeneralComponents'
import { ListInput } from './Inputs'

import { StyledMainForm, StyledHistory } from './styles/StyledForms.styled'

function JobForm({ history, addToHistory }) {
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [description, setDescription] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  let details = { title, company, description, from, to }
  const cbArray = [setTitle, setCompany, setDescription, setFrom, setTo]

  const changeTextState = (e, cb) => {
    cb(e.target.value)
  }

  const resetState = () => {
    cbArray.forEach((cb) => cb(''))
  }

  const submitJobToHistory = () => {
    addToHistory([...history, details])
    resetState()
  }

  return (
    <StyledMainForm>
      <div>
        <label>Job Title:</label>
        <input
          onChange={(e) => changeTextState(e, setTitle)}
          value={title}
        ></input>
      </div>
      <div>
        <label>Company:</label>
        <input
          onChange={(e) => changeTextState(e, setCompany)}
          value={company}
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
      <NavButtons type="button" onClick={submitJobToHistory}>
        Add Job
      </NavButtons>
    </StyledMainForm>
  )
}

export default JobForm
