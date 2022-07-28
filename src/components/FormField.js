import React, { Component } from 'react'
import uniqid from 'uniqid'

export class FormField extends Component {
    constructor(props) {
        super(props)
        this.populateFields = this.populateFields.bind(this)
    }

    formSubmit = (event) => {
      event.preventDefault()
      let formTemplate = [...this.props.fields]
      const inputValues = Array.from(event.target.querySelectorAll('INPUT')).map(input => input.value)

      if (inputValues[0] === '' || inputValues[1] === '') {
        alert('Please fill in all required fields.')
        return
      }

      formTemplate = formTemplate.map((elm, index) => {
        const newElm = {...elm}
        newElm.value = inputValues[index]
        return newElm
      })

      this.props.addDetails(this.props.detailField, formTemplate)
    }

    populateFields() {
        const {fields} = this.props.fields
        return fields.map(field => {
            return <InputField label={field.label} />
        })
    }

  render() {
    const {grid, formName, fields, history} = this.props
    const cName = `form-field ${grid} ${formName}`

    return (
      <form onSubmit={this.formSubmit} className={cName}>
        {fields.map(field => <InputField key={uniqid()} label={field.label} value={field.value} gridArea={field.gridArea || ''} />)}
        {history && history.map((item) => <History key={uniqid()} details={item} />)}
        {history && <button className='myButton'>+</button>}
      </form>
    )
  }
}

class InputField extends Component {
    render() {
      const {label, value, gridArea} = this.props
      const cName = gridArea ? `field-input ${gridArea}` : 'field-input'
      return (
        <div className={cName} key={uniqid()}>
          <label htmlFor={label}>{label}</label>
          <input id={label} defaultValue={value}></input>
        </div>
      )
    }
  }

  class History extends Component {
    render() {
        const {details} = this.props
        const [title, company] = details.slice(0, 2).map(item => item.value)
        return (
            <div className='history-item full-length' key={uniqid()}>
                <h6 key={uniqid()}>{title} - {company}</h6>
            </div>
        )
    }
  }

export default FormField