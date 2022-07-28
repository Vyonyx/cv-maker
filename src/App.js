import React, {Component} from 'react';
import './App.scss'
import FormField from './components/FormField';
import ListField from './components/ListField';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      personal: [
        {label: 'First Name:', value: 'Shaneel', gridArea: null},
        {label: 'Last Name:', value: 'Kumar', gridArea: null},
        {label: 'Current Title:', value: 'Architectural Technician', gridArea: null},
        {label: 'Mobile:', value: '02102797962', gridArea: null},
        {label: 'Email:', value: 'shaneel_kumar@live.com', gridArea: 'email'}
      ],
      job: [
        {label: 'Job Title:', value: '', gridArea: 'jobTitle'},
        {label: 'Company:', value: '', gridArea: 'company'},
        {label: 'From:', value: '', gridArea: null},
        {label: 'To:', value: '', gridArea: null},
        {label: 'Description:', value: '', gridArea: 'description'},
      ],
      jobHistory: [
        [
          {label: 'Job Title:', value: 'Architectural Technician', gridArea: 'jobTitle'},
          {label: 'Company:', value: 'Prime Designs', gridArea: 'company'},
          {label: 'From:', value: '', gridArea: null},
          {label: 'To:', value: '', gridArea: null},
          {label: 'Description:', value: '', gridArea: 'description'},
        ],
        [
          {label: 'Job Title:', value: 'Architectural Technician', gridArea: 'jobTitle'},
          {label: 'Company:', value: 'Design Network Architecture Ltd', gridArea: 'company'},
          {label: 'From:', value: '', gridArea: null},
          {label: 'To:', value: '', gridArea: null},
          {label: 'Description:', value: '', gridArea: 'description'},
        ]
      ],
      school: [
        {label: 'Degree:', value: '', gridArea: 'full-length'},
        {label: 'School:', value: '', gridArea: 'full-length'},
        {label: 'From:', value: '', gridArea: null},
        {label: 'To:', value: '', gridArea: null},
      ],
      schoolHistory: [
        [
          {label: 'Degree:', value: 'Master of Architecture [Prof.]', gridArea: 'full-length'},
          {label: 'School:', value: 'Victoria University of Wellington', gridArea: 'full-length'},
          {label: 'From:', value: '', gridArea: null},
          {label: 'To:', value: '', gridArea: null},
        ],
        [
          {label: 'Degree:', value: 'Bachelor of Architectural Studies', gridArea: 'full-length'},
          {label: 'School:', value: 'Victoria University of Wellington', gridArea: 'full-length'},
          {label: 'From:', value: '', gridArea: null},
          {label: 'To:', value: '', gridArea: null},
        ],
      ],
      skills: ['Photoshop', 'Rhino3D'],
      awards: ['24 Design Competition - 2015'],
      hobbies: ['Coding', 'Gaming']
    }
  }

  copy = (items) => items.map(item => Array.isArray(item) ? this.copy(item) : item)

  addDetails = (field, item) => {
    this.setState({
      [field]: [...this.state[field], item]
    })
  }

  addSecondary = (field, item) => {
    this.setState({
      [field]: [...this.state[field], item]
    })
  }

  render() {
    return (
      <div className="App">

        <section className="forms">

          <div className='secondary-fields'>

            <div className='photo-field'>
              <div className='profile-photo'></div>
              <button className='myButton'>Upload Photo</button>
            </div>

            <ListField 
              label='Skills:' 
              field='skills'
              items={this.state.skills}
              addNewItem = {this.addSecondary}
            />

            <ListField 
              label='Awards:'
              field='awards' 
              items={this.state.awards}
              addNewItem = {this.addSecondary}
            />

            <ListField 
              label='Hobbies:' 
              field='hobbies'
              items={this.state.hobbies}
              addNewItem = {this.addSecondary}
            />
          </div>

          <div className='primary-fields'>
            <FormField
              formName='personal'
              fields={this.state.personal}
            />
            <FormField
              formName='jobs'
              fields={this.state.job}
              history={this.state.jobHistory}
              detailField='jobHistory'
              addDetails={this.addDetails}
            />
            <FormField
              formName='school'
              fields={this.state.school}
              history={this.state.schoolHistory}
              detailField='schoolHistory'
              addDetails={this.addDetails}
            />
          <button className='myButton'>Preview PDF</button>
          </div>

        <div>

          <h1 className='logo'>CV</h1>
        </div>
        </section>

      </div>
    );
  }
}

export default App;
