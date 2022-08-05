import { ListForm } from "./FormMethods";
import { ListInput } from './Inputs'

import { StyledMainForm, StyledHistory } from './styles/StyledForms.styled'

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
        const { history } = this.props
        return (
            <StyledMainForm onSubmit={(e) => {this.submitListState(e, 'jobList', this.template)}}>
                <ListInput label='Title:' field='title' subState={'template'} updateFunction={this.updateTemplate}/>
                <ListInput label='Company:' field='company' subState={'template'} updateFunction={this.updateTemplate}/>
                <ListInput label='From:' field='from' subState={'template'} updateFunction={this.updateTemplate}/>
                <ListInput label='To:' field='to' subState={'template'} updateFunction={this.updateTemplate}/>
                <ListInput label='Description:' field='description' subState={'template'} updateFunction={this.updateTemplate}/>
                <button>Add Job Details</button>
                <StyledHistory>
                    {history.length > 0 && history.map(item => {
                        const { title, company } = item
                        return <li>{title} - {company}</li>
                    })}
                </StyledHistory>
            </StyledMainForm>
        )
    }
  }

  export default JobForm