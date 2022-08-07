import uniqid from 'uniqid'
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
        city: '',
        from: '',
        to: '',
        description: '',
    }
  
    render() {
        const { history } = this.props
        return (
                <StyledMainForm onSubmit={(e) => {this.submitListState(e, 'schoolList', this.template)}}>
                    <ListInput label='Degree:' field='degree' subState={'template'} updateFunction={this.updateTemplate}/>
                    <ListInput label='School:' field='school' subState={'template'} updateFunction={this.updateTemplate}/>
                    <ListInput label='City:' field='city' subState={'template'} updateFunction={this.updateTemplate}/>
                    <ListInput label='From:' field='from' subState={'template'} updateFunction={this.updateTemplate}/>
                    <ListInput label='To:' field='to' subState={'template'} updateFunction={this.updateTemplate}/>
                    <ListInput label='Description:' field='description' subState={'template'} updateFunction={this.updateTemplate}/>
                    <button>Add School Details</button>
                    <StyledHistory>
                        {history.length > 0 && history.map(item => {
                            const { degree, school } = item
                            return <li key={uniqid()}>{degree} - {school}</li>
                        })}
                    </StyledHistory>
                </StyledMainForm>
            )
        }
  }

  export default SchoolForm