import { Form } from "./FormMethods";
import { Input } from './Inputs'

import {StyledPersonalForm} from './styles/PersonalForm.styled'

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
        return (
            <StyledPersonalForm onSubmit={this.submitState}>
            <Input label='First Name:' field='firstName' updateFunction={this.updateState}/>
            <Input label='Last Name' field='lastName' updateFunction={this.updateState}/>
            <Input label='Title:' field='currentTitle' updateFunction={this.updateState}/>
            <Input label='Age:' field='age' updateFunction={this.updateState}/>
            <Input label='Mobile:' field='mobile' updateFunction={this.updateState}/>
            <Input label='Email:' field='email' updateFunction={this.updateState}/>
            <button>Submit Personal</button>
            </StyledPersonalForm>
        )
    }
}

export default PersonalForm