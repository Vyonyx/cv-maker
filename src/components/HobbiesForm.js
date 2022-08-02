import { ListForm } from './FormMethods'
import { ListInput } from './Inputs'
import { StyledHobbiesForm } from './styles/HobbiesForm.styled'

class HobbiesForm extends ListForm {
    template = {
      hobbyName: ''
    }
  
    render() {
      return (
        <StyledHobbiesForm onSubmit={(e) => {this.submitListState(e, 'hobbiesList', this.template)}}>
          <ListInput label='Hobby:' field='hobbyName' updateFunction={this.updateTemplate}/>
          <button>Add Hobby</button>
        </StyledHobbiesForm>
      )
    }
  }

  export default HobbiesForm