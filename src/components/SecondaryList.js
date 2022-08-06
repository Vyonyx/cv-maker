import { Component } from 'react'
import uniqid from 'uniqid'
import { StyledSecondaryList } from './styles/SecondaryDisplay.styled'

export default class SecondaryList extends Component {
  render() {
    return (
      <StyledSecondaryList>
        <h3>{this.props.label}</h3>
        <ul>
          {this.props.items.map(item => <li key={uniqid()}>{Object.values(item)}</li>)}
        </ul>
      </StyledSecondaryList>
    )
  }
}
