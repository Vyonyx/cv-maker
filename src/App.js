import React, {Component} from 'react'

import Page from './components/Page'
import PhotoUpload from './components/PhotoUpload'
import PersonalForm from './components/PersonalForm'
import JobForm from './components/JobForm'
import SchoolForm from './components/SchoolForm'

import { ListForm } from './components/FormMethods'
import { ListInput } from './components/Inputs'

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

class PhotoDisplay extends Component {
  render() {
    const {profilePhoto} = this.props
    return (
      <img src={profilePhoto} alt='Profile'></img>
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

export default App;
