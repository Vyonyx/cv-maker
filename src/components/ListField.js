import React, { Component } from 'react'

export class ListField extends Component {
  render() {
    const {label, skills} = this.props.details
    return (
      <div className='skills'>
          <div className='skills-field'>
            <label htmlFor='id'>{label}</label>
            <input id='id'></input>
            <button>+</button>
          </div>
          <div>
            {skills.map((skill, index) => <h3 key={index} className='skill-item'>{skill}</h3>)}
          </div>
      </div>
    )
  }
}

export default ListField