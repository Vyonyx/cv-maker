import React, { useState, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'

import PhotoUpload from './components/PhotoUpload'
import JobForm from './components/JobForm'
import SchoolForm from './components/SchoolForm'
import SkillsForm from './components/SkillsForm'
import HobbiesForm from './components/HobbiesForm'
import AwardsForm from './components/AwardsForm'
import PDFPage from './components/PDFPage'

import { FormSection, PDFSection } from './components/styles/FormSection.styled'
import { StyledLogo } from './components/styles/Logo.styled'
import { StyledMainForm } from './components/styles/StyledForms.styled'
import { StyledTextArea } from './components/styles/AboutMe.styled'
import { NavButtons } from './components/GeneralComponents'

const theme = {
  screenSwitch: '768px',
  gradient: {
    main: 'linear-gradient(to right, #BDC3C7, #2C3E50)',
    inputField:
      'linear-gradient(to right, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.25))',
    inverseMain: 'linear-gradient(to left, #BDC3C7, #2C3E50, #2C3E50)',
  },
  colors: {
    mainBlue: '#2C3E50',
    formBG: 'rgba(255, 255, 255, .3)',
  },
}

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [profilePhoto, setProfilePhoto] = useState(null)
  const [aboutMe, setAboutMe] = useState('')
  const [jobList, setJobList] = useState([])
  const [schoolList, setSchoolList] = useState([])
  const [skillsList, setSkillsList] = useState([])
  const [hobbiesList, setHobbiesList] = useState([])
  const [awardsList, setAwardsList] = useState([])
  const [viewForms, setViewForms] = useState(true)
  const [viewPDF, setViewPDF] = useState(false)

  const toggleViews = () => {
    setViewForms(viewForms ? false : true)
    setViewPDF(viewPDF ? false : true)
  }

  const changeTextState = (e, cb) => {
    cb(e.target.value)
  }

  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <FormSection viewStatus={viewForms}>
          <div>
            <StyledMainForm>
              <div>
                <label>First Name:</label>
                <input
                  onChange={(e) => changeTextState(e, setFirstName)}
                ></input>
              </div>
              <div>
                <label>Last Name:</label>
                <input
                  onChange={(e) => changeTextState(e, setLastName)}
                ></input>
              </div>
              <div>
                <label>Mobile:</label>
                <input onChange={(e) => changeTextState(e, setMobile)}></input>
              </div>
              <div>
                <label>Email:</label>
                <input onChange={(e) => changeTextState(e, setEmail)}></input>
              </div>
            </StyledMainForm>

            <StyledMainForm>
              <StyledTextArea
                onChange={(e) => changeTextState(e, setAboutMe)}
              ></StyledTextArea>
            </StyledMainForm>

            <JobForm history={jobList} addToHistory={setJobList} />
            <SchoolForm history={schoolList} addToHistory={setSchoolList} />
          </div>

          <div>
            <PhotoUpload photo={profilePhoto} setPhoto={setProfilePhoto} />
            <SkillsForm history={skillsList} addToHistory={setSkillsList} />
            <HobbiesForm history={hobbiesList} addToHistory={setHobbiesList} />
            <AwardsForm history={awardsList} addToHistory={setAwardsList} />
          </div>

          <div>
            <StyledLogo className="logo">CV</StyledLogo>
            <NavButtons onClick={toggleViews}>Preview PDF</NavButtons>
          </div>
        </FormSection>

        <PDFSection viewStatus={viewPDF}>
          <PDFPage
            ref={componentRef}
            firstName={firstName}
            lastName={lastName}
            mobile={mobile}
            email={email}
            profilePhoto={profilePhoto}
            aboutMe={aboutMe}
            skillsList={skillsList}
            awardsList={awardsList}
            hobbiesList={hobbiesList}
            jobList={jobList}
            schoolList={schoolList}
          />
          <StyledLogo className="logo">PDF</StyledLogo>
          <NavButtons onClick={toggleViews}>Edit CV</NavButtons>
          <NavButtons onClick={handlePrint}>Print PDF</NavButtons>
        </PDFSection>
      </>
    </ThemeProvider>
  )
}

export default App
