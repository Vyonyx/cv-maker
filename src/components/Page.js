import React, {Component} from 'react'

import ListDisplay from './ListDisplay'
import JobHistory from './JobHistory'
import SchoolHistory from './SchoolHistory'

import {StyledPage} from './styles/Page.styled'

// Page Components.
class Page extends Component {
    constructor(props) {
      super(props)
      this.state = {}
    }
    
    render() {
        const {firstName, lastName, currentTitle, mobile, email, 
            jobList, schoolList, skillsList, hobbiesList} = this.props.details

        return (
            <StyledPage>

                {firstName && lastName && <h1>{firstName} {lastName}</h1>}
                {currentTitle && <h3>Current Title: {currentTitle}</h3>}
                {mobile && <h3>Mobile: {mobile}</h3>}
                {email && <h3>Email: {email}</h3>}

                {jobList.length > 0 && 
                <JobHistory 
                label='Job History:' 
                listID='jobList' 
                history={jobList}
                deleteListItem={this.props.deleteListItem}
                />}

                {schoolList.length > 0 && 
                <SchoolHistory 
                label='School History:' 
                listID='schoolList' 
                history={schoolList}
                deleteListItem={this.props.deleteListItem}
                />}

                {skillsList.length > 0 && 
                <ListDisplay 
                label='Skills:' 
                listID='skillsList' 
                list={skillsList}
                deleteListItem={this.props.deleteListItem}
                />}
                
                {hobbiesList.length > 0 && 
                <ListDisplay 
                label='Hobbies:' 
                listID='hobbiesList' 
                list={hobbiesList} 
                deleteListItem={this.props.deleteListItem}
                />}

            </StyledPage>
        )
    }
}

export default Page