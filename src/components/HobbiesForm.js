import { ListForm } from './FormMethods'
import { ButtonInput } from './Inputs'
import { StyledSecondaryForm } from './styles/StyledForms.styled'

class HobbiesForm extends ListForm {
    template = {
      hobbyName: ''
    }
  
    render() {
      return (
        <StyledSecondaryForm onSubmit={(e) => {this.submitListState(e, 'hobbiesList', this.template)}}>
          <ButtonInput label='Hobby:' field='hobbyName' updateFunction={this.updateTemplate}/>
        </StyledSecondaryForm>
      )
    }
  }

  export default HobbiesForm