import { ListForm } from './FormMethods'
import { ButtonInput } from './Inputs'
import { StyledSecondaryForm, StyledHistory } from './styles/StyledForms.styled'

class HobbiesForm extends ListForm {
    template = {
      hobbyName: ''
    }
  
    render() {
      const { history } = this.props
      return (
        <StyledSecondaryForm onSubmit={(e) => {this.submitListState(e, 'hobbiesList', this.template)}}>
          <ButtonInput label='Hobby:' field='hobbyName' updateFunction={this.updateTemplate}/>
          <StyledHistory>
            {history.length > 0 && history.map(item => <li>{Object.values(item)}</li>)}
          </StyledHistory>
        </StyledSecondaryForm>
      )
    }
  }

  export default HobbiesForm