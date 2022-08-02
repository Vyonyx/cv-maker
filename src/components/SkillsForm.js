import { ListForm } from './FormMethods'
import { ListInput } from './Inputs'
import { StyledSkillsForm } from './styles/SkillsForm.styled'

class SkillsForm extends ListForm {
    template = {
      skillName: ''
    }
  
    render() {
      return (
        <StyledSkillsForm onSubmit={(e) => {this.submitListState(e, 'skillsList', this.template)}}>
          <ListInput label='Skill:' field='skillName' updateFunction={this.updateTemplate}/>
          <button>Add Skill</button>
        </StyledSkillsForm>
      )
    }
  }

  export default SkillsForm