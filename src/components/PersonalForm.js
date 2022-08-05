import { Form } from "./FormMethods";
import { Input } from './Inputs'

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
        return (
            <StyledMainForm onSubmit={this.submitState}>
            <Input label='First Name:' field='firstName' updateFunction={this.updateState} defaultValue={firstName} />
            <Input label='Last Name' field='lastName' updateFunction={this.updateState} defaultValue={lastName} />
            <Input label='Title:' field='currentTitle' updateFunction={this.updateState} defaultValue={currentTitle} />
            <Input label='Age:' field='age' updateFunction={this.updateState} defaultValue={age} />
            <Input label='Mobile:' field='mobile' updateFunction={this.updateState} defaultValue={mobile} />
            <Input label='Email:' field='email' updateFunction={this.updateState} defaultValue={email} />
            <button>Add Personal Details</button>
            </StyledMainForm>
        )
    }
}

export default PersonalForm