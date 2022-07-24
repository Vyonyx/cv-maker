import React, {Component} from 'react';
import './App.scss'
import FormField from './components/FormField';
import ListField from './components/ListField';

class App extends Component {
  constructor() {
    super()
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
        skills: [],
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <div className='photo-field'>
            <div className='profile-photo'></div>
            <button className='myButton'>Upload Photo</button>
          </div>
          <ListField details={{label: 'Skills:', skills: ['Photoshop', 'Rhino3D']}}/>
          <ListField details={{label: 'Awards:', skills: ['24 Hour Design Competition - 2015']}}/>
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
