import { ListForm } from "./FormMethods";
import { ListInput } from './Inputs'

import { StyledJobForm } from './styles/JobForm.styled'

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
            <StyledJobForm onSubmit={(e) => {this.submitListState(e, 'jobList', this.template)}}>
                <ListInput label='Title:' field='title' subState={'template'} updateFunction={this.updateTemplate}/>
                <ListInput label='Company:' field='company' subState={'template'} updateFunction={this.updateTemplate}/>
                <ListInput label='From:' field='from' subState={'template'} updateFunction={this.updateTemplate}/>
                <ListInput label='To:' field='to' subState={'template'} updateFunction={this.updateTemplate}/>
                <ListInput label='Description:' field='description' subState={'template'} updateFunction={this.updateTemplate}/>
                <button>Add Job Details</button>
            </StyledJobForm>
        )
    }
  }

  export default JobForm