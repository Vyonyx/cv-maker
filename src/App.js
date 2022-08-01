import React, {Component} from 'react';
import uniqid from 'uniqid'

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      currentTitle: '',
      age: '',
      mobile: '',
      email: '',
      profilePhoto: null,
      jobList: [],
      schoolList: [],
      skillsList: [],
      hobbiesList: [],
    }
  }

  setMainState = (stateInfo) => {
    const keys = Object.keys(stateInfo)
    keys.forEach(key => {
      this.setState({
        [key]: stateInfo[key]
      })
    })
  }

  appendToListState = (listID, item) => {
    this.setState({
      [listID]: [...this.state[listID], item]
    })
  }

  deleteListItem = (listID, value) => {
    this.setState({
      [listID]: [...this.state[listID].filter(item => item !== value)]
    })
  }

  setProfilePhoto = (url) => {
    this.setState({
      profilePhoto: url
    })
  }

  render() {
    return (
      <div className="App">
        <PhotoUpload setPhoto={this.setProfilePhoto} />
        {this.state.profilePhoto && <PhotoDisplay profilePhoto={this.state.profilePhoto}/>}

        <PersonalForm formSubmit={this.setMainState} />
        <JobForm formSubmit={this.appendToListState} />
        <SchoolForm formSubmit={this.appendToListState} />

        <SkillsForm formSubmit={this.appendToListState} />
        <HobbiesForm formSubmit={this.appendToListState} />
        <Page firstName={this.state.firstName} details={this.state} deleteListItem={this.deleteListItem} />
      </div>
    );
  }
}

// Page Components.
class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const {firstName, lastName, currentTitle, mobile, email, jobList, schoolList, skillsList, hobbiesList} = this.props.details
    return (
      <div className='PDF'>

        {firstName && lastName && <h1>{firstName} {lastName}</h1>}
        {currentTitle && <h3>Current Title: {currentTitle}</h3>}
        {mobile && <h3>Mobile: {mobile}</h3>}
        {email && <h3>Email: {email}</h3>}

        {jobList.length > 0 && 
        <JobHistory 
          label='Job History:' 
          listID='jobList' 
          history={jobList}
          deleteListItem={this.props.deleteListItem}
        />}

        {schoolList.length > 0 && 
        <SchoolHistory 
          label='School History:' 
          listID='schoolList' 
          history={schoolList}
          deleteListItem={this.props.deleteListItem}
        />}

        {skillsList.length > 0 && 
        <ListDisplay 
          label='Skills:' 
          listID='skillsList' 
          list={skillsList}
          deleteListItem={this.props.deleteListItem}
        />}
        
        {hobbiesList.length > 0 && 
        <ListDisplay 
          label='Hobbies:' 
          listID='hobbiesList' 
          list={hobbiesList} 
          deleteListItem={this.props.deleteListItem}
        />}

      </div>
    )
  }
}

class JobHistory extends Component {
  render() {
    const {label, history} = this.props
    return (
      <div>
        <h3>{label}</h3>
        {history.map(item => {
        const {title, company, from, to, description} = item
          return <div key={uniqid()}>
            <ul>
              {title && <li key={uniqid()}>{title}</li>}
              {company && <li key={uniqid()}>{company}</li>}
              {from && <li key={uniqid()}>{from}</li>}
              {to && <li key={uniqid()}>{to}</li>}
              {description && <li key={uniqid()}>{description}</li>}
            </ul>
            <button onClick={(e) => {this.props.deleteListItem(this.props.listID, item)}}>Delete</button>
          </div>
        })}
      </div>
    )
  }
}

class SchoolHistory extends Component {
  render() {
    const {label, history} = this.props
    return (
      <div>
        <h3>{label}</h3>
        {history.map(item => {
        const {degree, school, from, to} = item
          return <div key={uniqid()}>
            <ul>
              {degree && <li key={uniqid()}>{degree}</li>}
              {school && <li key={uniqid()}>{school}</li>}
              {from && <li key={uniqid()}>{from}</li>}
              {to && <li key={uniqid()}>{to}</li>}
            </ul>
            <button onClick={(e) => {this.props.deleteListItem(this.props.listID, item)}}>Delete</button>
          </div>
        })}
      </div>
    )
  }
}

class ListDisplay extends Component {
  render() {
    const {label, list} = this.props
    return (
      <div>
        <h3>{label}</h3>
        <ul>
          {list
            .map(item => Object.values(item)
            .map(value => <li key={uniqid()}>
              <h3>{value}</h3>
              <button onClick={(e) => {this.props.deleteListItem(this.props.listID, item)}}>x</button>
            </li>))
          }
        </ul>
      </div>
    )
  }
}

class PhotoUpload extends Component {
  state = {
    photo: ''
  }

  whenPhotoUploaded = (event) => {
    this.setState(prevState => {
      prevState.photo = URL.createObjectURL(event.target.files[0])
    }, () => {this.props.setPhoto(this.state.photo)})
  }


  render() {
    return (
      <div>
        <label>Profile Photo: </label>
        <input type='file' onChange={this.whenPhotoUploaded}></input>
      </div>
    )
  }
}

class PhotoDisplay extends Component {
  render() {
    const {profilePhoto} = this.props
    return (
      <img src={profilePhoto} alt='Profile'></img>
    )
  }
}

// Form components.
class Form extends Component {
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

class ListForm extends Form {

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

class PersonalForm extends Form {
  state = {
    firstName: '',
    lastName: '',
    currentTitle: '',
    age: '',
    mobile: '',
    email: '',
  }

  render() {
    return (
      <form onSubmit={this.submitState}>
        <MyInput label='First Name:' field='firstName' updateFunction={this.updateState}/>
        <MyInput label='Last Name' field='lastName' updateFunction={this.updateState}/>
        <MyInput label='Title:' field='currentTitle' updateFunction={this.updateState}/>
        <MyInput label='Age:' field='age' updateFunction={this.updateState}/>
        <MyInput label='Mobile:' field='mobile' updateFunction={this.updateState}/>
        <MyInput label='Email:' field='email' updateFunction={this.updateState}/>
        <button>Submit Personal</button>
      </form>
    )
  }
}

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
      <form onSubmit={(e) => {this.submitListState(e, 'jobList', this.template)}}>
        <ListInput label='Title:' field='title' subState={'template'} updateFunction={this.updateTemplate}/>
        <ListInput label='Company:' field='company' subState={'template'} updateFunction={this.updateTemplate}/>
        <ListInput label='From:' field='from' subState={'template'} updateFunction={this.updateTemplate}/>
        <ListInput label='To:' field='to' subState={'template'} updateFunction={this.updateTemplate}/>
        <ListInput label='Description:' field='description' subState={'template'} updateFunction={this.updateTemplate}/>
        <button>Add Job Details</button>
      </form>
    )
  }
}

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
      <form onSubmit={(e) => {this.submitListState(e, 'schoolList', this.template)}}>
        <ListInput label='Degree:' field='degree' subState={'template'} updateFunction={this.updateTemplate}/>
        <ListInput label='School:' field='school' subState={'template'} updateFunction={this.updateTemplate}/>
        <ListInput label='From:' field='from' subState={'template'} updateFunction={this.updateTemplate}/>
        <ListInput label='To:' field='to' subState={'template'} updateFunction={this.updateTemplate}/>
        <button>Add School Details</button>
      </form>
    )
  }
}

class SkillsForm extends ListForm {
  template = {
    skillName: ''
  }

  render() {
    return (
      <form onSubmit={(e) => {this.submitListState(e, 'skillsList', this.template)}}>
        <ListInput label='Skill:' field='skillName' updateFunction={this.updateTemplate}/>
        <button>Add Skill</button>
      </form>
    )
  }
}

class HobbiesForm extends ListForm {
  template = {
    hobbyName: ''
  }

  render() {
    return (
      <form onSubmit={(e) => {this.submitListState(e, 'hobbiesList', this.template)}}>
        <ListInput label='Hobby:' field='hobbyName' updateFunction={this.updateTemplate}/>
        <button>Add Hobby</button>
      </form>
    )
  }
}

// Input components.
class MyInput extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input onChange={(e) => {this.props.updateFunction(this.props.field, e.target.value)}}></input>
      </div>
    )
  }
}

class ListInput extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input onChange={(e) => {this.props.updateFunction(this.props.field, e.target.value, this.props.subField)}}></input>
      </div>
    )
  }
}

export default App;
