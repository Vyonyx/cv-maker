import { ListForm } from "./FormMethods";
import { ListInput } from './Inputs'

import { StyledMainForm, StyledHistory } from './styles/StyledForms.styled'

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
        const { history } = this.props
        return (
                <StyledMainForm onSubmit={(e) => {this.submitListState(e, 'schoolList', this.template)}}>
                    <ListInput label='Degree:' field='degree' subState={'template'} updateFunction={this.updateTemplate}/>
                    <ListInput label='School:' field='school' subState={'template'} updateFunction={this.updateTemplate}/>
                    <ListInput label='From:' field='from' subState={'template'} updateFunction={this.updateTemplate}/>
                    <ListInput label='To:' field='to' subState={'template'} updateFunction={this.updateTemplate}/>
                    <button>Add School Details</button>
                    <StyledHistory>
                        {history.length > 0 && history.map(item => {
                            const { degree, school } = item
                            return <li>{degree} - {school}</li>
                        })}
                    </StyledHistory>
                </StyledMainForm>
            )
        }
  }

  export default SchoolForm