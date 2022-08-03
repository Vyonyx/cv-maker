import { ListForm } from './FormMethods'
import { ButtonInput } from './Inputs'
import { StyledSecondaryForm } from './styles/StyledForms.styled'

class SkillsForm extends ListForm {
    template = {
      skillName: ''
    }
  
    render() {
      return (
        <StyledSecondaryForm onSubmit={(e) => {this.submitListState(e, 'skillsList', this.template)}}>
          <ButtonInput label='Skill:' field='skillName' updateFunction={this.updateTemplate}/>
        </StyledSecondaryForm>
      )
    }
  }

  export default SkillsForm