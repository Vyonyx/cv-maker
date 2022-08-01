import React, {Component} from 'react'
import uniqid from 'uniqid'

import {StyledSchoolHistory} from './styles/History.styled'

class SchoolHistory extends Component {
    render() {
        const {label, history} = this.props
        return (
        <StyledSchoolHistory>
            <h3>{label}</h3>
            {history.map(item => {
            const {degree, school, from, to} = item
            return <div key={uniqid()}>
                <ul>
                {degree && <li key={uniqid()}>{degree}</li>}
                {school && <li key={uniqid()}>{school}</li>}
                {from && <li key={uniqid()}>{from}</li>}
                {to && <li key={uniqid()}>{to}</li>}
                </ul>
                <button onClick={(e) => {this.props.deleteListItem(this.props.listID, item)}}>Delete</button>
            </div>
            })}
        </StyledSchoolHistory>
        )
    }
}

export default SchoolHistory