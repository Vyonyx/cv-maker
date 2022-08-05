import {Component} from 'react'
import { StyledInput, StyledListInput, StyledButtonInput } from './styles/Inputs.styled'

// Input components.
export class Input extends Component {
    render() {
      const { defaultValue, submittedValue } = this.props
      return (
        <StyledInput defaultValue={defaultValue} submittedValue={submittedValue}>
          <label>{this.props.label}</label>
          <input 
            onChange={(e) => {this.props.updateFunction(this.props.field, e.target.value)}}
            value={defaultValue}
          ></input>
        </StyledInput>
      )
    }
  }
  
  export class ListInput extends Component {
    render() {
      return (
        <StyledListInput>
          <label>{this.props.label}</label>
          <input onChange={(e) => {this.props.updateFunction(this.props.field, e.target.value, this.props.subField)}}></input>
        </StyledListInput>
      )
    }
  }

  export class ButtonInput extends Component {
    render() {
      return (
        <StyledButtonInput>
          <label>{this.props.label}</label>
          <input onChange={(e) => {this.props.updateFunction(this.props.field, e.target.value, this.props.subField)}}></input>
          <button>+</button>
        </StyledButtonInput>
      )
    }
  }