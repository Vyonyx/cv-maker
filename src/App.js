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
      form: {
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
  }

  addSkill(event) {
    event.preventDefault()
    const input = event.target.querySelector('INPUT')
    const value = input.value
    let prevState = Object(this.state)

    prevState.form.skills = [...prevState.form.skills, value] 
    this.setState(prevState)
    input.value = ''
  }

  addAward(event) {
    event.preventDefault()
    const input = event.target.querySelector('INPUT')
    const value = input.value
    let prevState = Object(this.state)

    prevState.form.awards = [...prevState.form.awards, value] 
    this.setState(prevState)
    input.value = ''
  }

  addHobby(event) {
    event.preventDefault()
    const input = event.target.querySelector('INPUT')
    const value = input.value
    let prevState = Object(this.state)

    prevState.form.hobbies = [...prevState.form.hobbies, value] 
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
            <ListField label='Skills:' items={this.state.form.skills}/>
          </form>
          <form onSubmit={this.addAward}>
            <ListField label='Awards:' items={this.state.form.awards}/>
          </form>
          <form onSubmit={this.addHobby}>
          <ListField label='Hobbies:' items={this.state.form.hobbies}/>
          </form>
        </div>

        <div>
        <FormField grid='main' formName='personal' fields={this.state.form.personal} history={null}/>
        <FormField grid='main' formName='jobs' fields={this.state.form.job} history={this.state.form.jobHistory}/>
        <FormField grid='main' formName='school' fields={this.state.form.school} history={this.state.form.schoolHistory}/>
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
