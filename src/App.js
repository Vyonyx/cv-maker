import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'

import PhotoUpload from './components/PhotoUpload'
import PersonalForm from './components/PersonalForm'
import JobForm from './components/JobForm'
import SchoolForm from './components/SchoolForm'
import PhotoDisplay from './components/PhotoDisplay'
import SkillsForm from './components/SkillsForm'
import HobbiesForm from './components/HobbiesForm'

import GlobalStyles from './components/styles/Global'
import { FormSection, PDFSection } from './components/styles/FormSection.styled'
import { StyledLogo } from './components/styles/Logo.styled'
import { StyledPDF } from './components/styles/PDF.styled'

const theme = {
  screenSwitch: '768px',
  gradient: {
    main: 'linear-gradient(to right, #BDC3C7, #2C3E50)',
    inputField: 'linear-gradient(to right, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.25))',
    inverseMain: 'linear-gradient(to left, #BDC3C7, #2C3E50, #2C3E50)',
  },
  colors: {
    mainBlue: '#2C3E50',
    formBG: 'rgba(255, 255, 255, .3)',
  },
}

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
      viewForms: true,
      viewPDF: false,
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

  toggleViews = () => {
    this.setState({
      viewForms: this.state.viewForms === true ? false : true,
      viewPDF: this.state.viewPDF === true ? false : true
    })
  }

  editText = (event) => {
    const val = window.prompt('What would you like to edit this text to?')
    const text  = event.target
    text.innerText = val
  }

  render() {
    return (
      <ThemeProvider theme={ theme }>
        <>
        <GlobalStyles />

          <FormSection viewStatus={this.state.viewForms}>
            <div>
              <PersonalForm formSubmit={this.setMainState} submittedInfo={this.state} />
              <JobForm formSubmit={this.appendToListState} history={this.state.jobList} />
              <SchoolForm formSubmit={this.appendToListState} history={this.state.schoolList} />
            </div>

            <div>
              <PhotoUpload setPhoto={this.setProfilePhoto} photo={this.state.profilePhoto}/>
              <SkillsForm formSubmit={this.appendToListState} history={this.state.skillsList} />
              <HobbiesForm formSubmit={this.appendToListState} history={this.state.hobbiesList} />
            </div>
            
            <div>
              <StyledLogo className='logo'>CV</StyledLogo>
              <button onClick={this.toggleViews} >Preview PDF</button>
            </div>
          </FormSection>

          <PDFSection viewStatus={this.state.viewPDF}>
            <StyledPDF>
              {this.state.profilePhoto && <PhotoDisplay profilePhoto={this.state.profilePhoto}/>}
            </StyledPDF>
            <StyledLogo className='logo'>PDF</StyledLogo>
            <button onClick={this.toggleViews} >Edit CV</button>
          </PDFSection>

        </>
      </ThemeProvider>
    );
  }
}

export default App;
