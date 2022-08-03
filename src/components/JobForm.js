import { ListForm } from "./FormMethods";
import { ListInput } from './Inputs'

import { StyledForm } from './styles/StyledForm.styled'

class JobForm extends ListForm {
    state = {
        jobList: [],
    }
  
    template = {
        title: '',
        company: '',
        from: '',
        to: '',
        description: '',
    }
  
    render() {
        return (
            <StyledForm onSubmit={(e) => {this.submitListState(e, 'jobList', this.template)}}>
                <ListInput label='Title:' field='title' subState={'template'} updateFunction={this.updateTemplate}/>
                <ListInput label='Company:' field='company' subState={'template'} updateFunction={this.updateTemplate}/>
                <ListInput label='From:' field='from' subState={'template'} updateFunction={this.updateTemplate}/>
                <ListInput label='To:' field='to' subState={'template'} updateFunction={this.updateTemplate}/>
                <ListInput label='Description:' field='description' subState={'template'} updateFunction={this.updateTemplate}/>
                <button>+</button>
            </StyledForm>
        )
    }
  }

  export default JobForm