import React, {Component} from 'react'
import uniqid from 'uniqid'

import {StyledJobHistory} from './styles/History.styled'

class JobHistory extends Component {
    render() {
        const {label, history} = this.props
        return (
        <StyledJobHistory>
            <h3>{label}</h3>
            {history.map(item => {
            const {title, company, from, to, description} = item
            return <div key={uniqid()}>
                <ul>
                {title && <li key={uniqid()}>{title}</li>}
                {company && <li key={uniqid()}>{company}</li>}
                {from && <li key={uniqid()}>{from}</li>}
                {to && <li key={uniqid()}>{to}</li>}
                {description && <li key={uniqid()}>{description}</li>}
                </ul>
                <button onClick={(e) => {this.props.deleteListItem(this.props.listID, item)}}>Delete</button>
            </div>
            })}
        </StyledJobHistory>
        )
    }
}

export default JobHistory