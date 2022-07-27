import React, {Component} from 'react';
import './App.scss'
import FormField from './components/FormField';
import ListField from './components/ListField';

class App extends Component {
  constructor() {
    super()

    this.addSkill = this.addSkill.bind(this)
    this.addAward = this.addAward.bind(this)
    this.addHobby = this.addHobby.bind(this)

    this.state = {
      personal: [
        {label: 'First Name:', value: 'Shaneel', gridArea: null},
        {label: 'Last Name:', value: 'Kumar', gridArea: null},
        {label: 'Current Title:', value: 'Architectural Technician', gridArea: null},
        {label: 'Mobile:', value: '02102797962', gridArea: null},
        {label: 'Email:', value: 'shaneel_kumar@live.com', gridArea: 'email'}
      ],
      job: [
        {label: 'Job Title:', value: 'Architectural Technician', gridArea: 'jobTitle'},
        {label: 'Company:', value: 'Prime Designs', gridArea: 'company'},
        {label: 'From:', value: '', gridArea: null},
        {label: 'To:', value: '', gridArea: null},
        {label: 'Description:', value: '', gridArea: 'description'},
      ],
      jobHistory: [
        [
          {label: 'Job Title:', value: 'Architectural Technician', gridArea: 'jobTitle'},
          {label: 'Company:', value: 'Prime Designs', gridArea: 'company'},
        ],
        [
          {label: 'Job Title:', value: 'Architectural Technician', gridArea: 'jobTitle'},
          {label: 'Company:', value: 'Design Network Architecture Ltd', gridArea: 'company'},
        ],
      ],
      school: [
        {label: 'Degree:', value: 'Master of Architecture [Prof.]', gridArea: 'full-length'},
        {label: 'School:', value: 'Victoria University of Wellington', gridArea: 'full-length'},
        {label: 'From:', value: '', gridArea: null},
        {label: 'To:', value: '', gridArea: null},
      ],
      schoolHistory: [
        [
          {label: 'Degree:', value: 'Master of Architecture [Prof.]', gridArea: 'full-length'},
          {label: 'School:', value: 'Victoria University of Wellington', gridArea: 'full-length'},
        ],
        [
          {label: 'Degree:', value: 'Bachelor of Architectural Studies', gridArea: 'full-length'},
          {label: 'School:', value: 'Victoria University of Wellington', gridArea: 'full-length'},
        ],
      ],
      skills: ['Photoshop', 'Rhino3D'],
      awards: ['24 Design Competition - 2015'],
      hobbies: ['Coding', 'Gaming']
    }
  }

  addSkill(event) {
    event.preventDefault()
    const input = event.target.querySelector('INPUT')
    const value = input.value
    let prevState = Object(this.state)

    prevState.skills = [...prevState.skills, value] 
    this.setState(prevState)
    input.value = ''
  }

  addAward(event) {
    event.preventDefault()
    const input = event.target.querySelector('INPUT')
    const value = input.value
    let prevState = Object(this.state)

    prevState.awards = [...prevState.awards, value] 
    this.setState(prevState)
    input.value = ''
  }

  addHobby(event) {
    event.preventDefault()
    const input = event.target.querySelector('INPUT')
    const value = input.value
    let prevState = Object(this.state)

    prevState.hobbies = [...prevState.hobbies, value] 
    this.setState(prevState)
    input.value = ''
  }

  render() {
    return (
      <div className="App">
        <div>
          <div className='photo-field'>
            <div className='profile-photo'></div>
            <button className='myButton'>Upload Photo</button>
          </div>
          <form onSubmit={this.addSkill}>
            <ListField label='Skills:' items={this.state.skills}/>
          </form>
          <form onSubmit={this.addAward}>
            <ListField label='Awards:' items={this.state.awards}/>
          </form>
          <form onSubmit={this.addHobby}>
          <ListField label='Hobbies:' items={this.state.hobbies}/>
          </form>
        </div>

        <div>
        <form>
          <FormField grid='main' formName='personal' fields={this.state.personal} history={null}/>
        </form>
        <form>
          <FormField grid='main'formName='jobs' fields={this.state.job} history={this.state.jobHistory}/>
        </form>
        <form>
          <FormField grid='main' formName='school' fields={this.state.school} history={this.state.schoolHistory}/>
        </form>
        <button className='myButton'>Preview PDF</button>
        </div>

        <div>
          <h1 className='logo'>CV</h1>
        </div>
      </div>
    );
  }
}

export default App;
