import {Component} from 'react'

// Form components.
export class Form extends Component {
    // Updates the local state of this form component.
    updateState = (field, value) => {
      this.setState({
        [field]: value
      })
    }
  
    // Clear inputs during form submission.
    clearInputFields = (event) => {
      const inputs = event.target.querySelectorAll('INPUT')
      Array.from(inputs).forEach(input => input.value = '')
    }
  
    clearTemplate = () => {
      try {
        Object.keys(this.template).forEach(key => this.template[key] = '')
      } catch {}
    }
  
    // Overwrite the main state of the App using this form's substate.
    submitState = (event) => {
      event.preventDefault()
      this.clearInputFields(event)
      this.clearTemplate()
      this.props.formSubmit({...this.state})
    }
  }
  
  export class ListForm extends Form {
  
    // Updates the template values so that it can be appended to the state array/list
    // that is keeping track of the history.
    updateTemplate = (key, value) => {
      this.template = {...this.template, [key]: value}
    }
  
    // Append template to form state array/list and then submit that to the main App state.
    submitListState = (event, field, item) => {
      event.preventDefault()
      this.clearInputFields(event)
      this.setState(prevState => ({
        [field]: [{...this.template}]
      }), () => this.props.formSubmit(field, item))
    }
  }