import { Component } from 'react'
import uniqid from 'uniqid'
import { StyledSecondaryList } from './styles/SecondaryDisplay.styled'
import { StyledSubHeading } from './styles/SubHeading.styled'

export default class SecondaryList extends Component {
  render() {
    return (
      <StyledSecondaryList>
        <StyledSubHeading>{this.props.label}</StyledSubHeading>
        <ul>
          {this.props.items.map(item => <li key={uniqid()}>{Object.values(item)}</li>)}
        </ul>
      </StyledSecondaryList>
    )
  }
}
