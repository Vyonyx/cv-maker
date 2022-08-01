import {Component} from 'react'

// Input components.
export class Input extends Component {
    render() {
      return (
        <div>
          <label>{this.props.label}</label>
          <input onChange={(e) => {this.props.updateFunction(this.props.field, e.target.value)}}></input>
        </div>
      )
    }
  }
  
  export class ListInput extends Component {
    render() {
      return (
        <div>
          <label>{this.props.label}</label>
          <input onChange={(e) => {this.props.updateFunction(this.props.field, e.target.value, this.props.subField)}}></input>
        </div>
      )
    }
  }