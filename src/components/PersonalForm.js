import { Form } from "./FormMethods";
import { Input } from './Inputs'
import { NavButtons } from './GeneralComponents'

import { StyledMainForm } from './styles/StyledForms.styled'

class PersonalForm extends Form {
    state = {
        firstName: '',
        lastName: '',
        currentTitle: '',
        age: '',
        mobile: '',
        email: '',
    }

    render() {
        const { firstName, lastName, currentTitle, age, mobile, email } = this.state
        const submittedFirstName = this.props.submittedInfo.firstName
        const submittedLastName = this.props.submittedInfo.lastName
        const submittedCurrentTitle = this.props.submittedInfo.currentTitle
        const submittedAge = this.props.submittedInfo.age
        const submittedMobile = this.props.submittedInfo.mobile
        const submittedEmail = this.props.submittedInfo.email
        return (
            <StyledMainForm onSubmit={this.submitState}>
            <Input 
                label='First Name:' 
                field='firstName' 
                updateFunction={this.updateState} 
                defaultValue={firstName} 
                submittedValue={submittedFirstName} 
            />
            <Input 
                label='Last Name' 
                field='lastName' 
                updateFunction={this.updateState} 
                defaultValue={lastName} 
                submittedValue={submittedLastName} 
            />
            <Input 
                label='Title:' 
                field='currentTitle' 
                updateFunction={this.updateState} 
                defaultValue={currentTitle} 
                submittedValue={submittedCurrentTitle} 
            />
            <Input 
                label='Age:' 
                field='age' 
                updateFunction={this.updateState} 
                defaultValue={age} 
                submittedValue={submittedAge} 
            />
            <Input 
                label='Mobile:' 
                field='mobile' 
                updateFunction={this.updateState} 
                defaultValue={mobile} 
                submittedValue={submittedMobile} 
            />
            <Input 
                label='Email:' 
                field='email' 
                updateFunction={this.updateState} 
                defaultValue={email} 
                submittedValue={submittedEmail} 
            />
            <NavButtons>Add Personal Details</NavButtons>
            </StyledMainForm>
        )
    }
}

export default PersonalForm