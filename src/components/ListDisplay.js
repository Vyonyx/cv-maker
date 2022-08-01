import React, {Component} from 'react'
import uniqid from 'uniqid'

import {StyledListDisplay} from './styles/ListDisplay.styled'

class ListDisplay extends Component {
    render() {
      const {label, list} = this.props
      return (
        <StyledListDisplay>
          <h3>{label}</h3>
          <ul>
            {list
              .map(item => Object.values(item)
              .map(value => <li key={uniqid()}>
                <h3>{value}</h3>
                <button onClick={(e) => {this.props.deleteListItem(this.props.listID, item)}}>x</button>
              </li>))
            }
          </ul>
        </StyledListDisplay>
      )
    }
  }

  export default ListDisplay