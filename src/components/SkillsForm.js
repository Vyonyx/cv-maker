import { ListForm } from './FormMethods'
import { ButtonInput } from './Inputs'
import { StyledForm } from './styles/StyledForm.styled'

class SkillsForm extends ListForm {
    template = {
      skillName: ''
    }
  
    render() {
      return (
        <StyledForm onSubmit={(e) => {this.submitListState(e, 'skillsList', this.template)}}>
          <ButtonInput label='Skill:' field='skillName' updateFunction={this.updateTemplate}/>
        </StyledForm>
      )
    }
  }

  export default SkillsForm