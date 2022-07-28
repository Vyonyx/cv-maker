import React, { Component } from 'react'
import uniqid from 'uniqid'

export class ListField extends Component {

  formSubmit = (event) => {
    event.preventDefault()
    const input = event.target.querySelector('INPUT')
    const value = input.value
    input.value = ''
    this.props.addNewItem(this.props.field, value)
  }

  render() {
    const {label, items, addNewItem} = this.props
    return (
      <form onSubmit={this.formSubmit} className='skills'>
          <div className='skills-field'>
            <label htmlFor='id'>{label}</label>
            <input id='id'></input>
            <button>+</button>
          </div>
          <div>
            {items.map((skill, index) => <h3 key={uniqid()} className='skill-item'>{skill}</h3>)}
          </div>
      </form>
    )
  }
}

export default ListField