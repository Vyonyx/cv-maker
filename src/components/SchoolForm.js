import { ListForm } from "./FormMethods";
import { ListInput } from './Inputs'

import { StyledSchoolForm } from './styles/SchoolForm.styled'

class SchoolForm extends ListForm {
    state = {
        schoolList: [],
    }
  
    template = {
        degree: '',
        school: '',
        from: '',
        to: '',
    }
  
    render() {
        return (
                <StyledSchoolForm onSubmit={(e) => {this.submitListState(e, 'schoolList', this.template)}}>
                    <ListInput label='Degree:' field='degree' subState={'template'} updateFunction={this.updateTemplate}/>
                    <ListInput label='School:' field='school' subState={'template'} updateFunction={this.updateTemplate}/>
                    <ListInput label='From:' field='from' subState={'template'} updateFunction={this.updateTemplate}/>
                    <ListInput label='To:' field='to' subState={'template'} updateFunction={this.updateTemplate}/>
                    <button>Add School Details</button>
                </StyledSchoolForm>
            )
        }
  }

  export default SchoolForm