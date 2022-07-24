import React, { Component } from 'react'
import uniqid from 'uniqid'

export class ListField extends Component {
  render() {
    const {label, items} = this.props
    return (
      <div className='skills'>
          <div className='skills-field'>
            <label htmlFor='id'>{label}</label>
            <input id='id'></input>
            <button>+</button>
          </div>
          <div>
            {items.map((skill, index) => <h3 key={uniqid()} className='skill-item'>{skill}</h3>)}
          </div>
      </div>
    )
  }
}

export default ListField