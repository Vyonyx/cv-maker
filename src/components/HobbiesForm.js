import { ListForm } from './FormMethods'
import { ButtonInput } from './Inputs'
import { StyledForm } from './styles/StyledForm.styled'

class HobbiesForm extends ListForm {
    template = {
      hobbyName: ''
    }
  
    render() {
      return (
        <StyledForm onSubmit={(e) => {this.submitListState(e, 'hobbiesList', this.template)}}>
          <ButtonInput label='Hobby:' field='hobbyName' updateFunction={this.updateTemplate}/>
        </StyledForm>
      )
    }
  }

  export default HobbiesForm