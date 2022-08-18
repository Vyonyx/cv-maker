import React, { useState, Component } from "react";
import uniqid from "uniqid";
import { ThemeProvider } from "styled-components";
import ReactToPrint from "react-to-print";

import PhotoUpload from "./components/PhotoUpload";
import PersonalForm from "./components/PersonalForm";
import JobForm from "./components/JobForm";
import SchoolForm from "./components/SchoolForm";
import AboutMe from "./components/AboutMe";
import SkillsForm from "./components/SkillsForm";
import HobbiesForm from "./components/HobbiesForm";
import AwardsForm from "./components/AwardsForm";

import DummyPage from "./components/DummyPage";
import { NavButtons } from "./components/GeneralComponents";

import GlobalStyles from "./components/styles/Global";
import {
  FormSection,
  PDFSection,
} from "./components/styles/FormSection.styled";
import { StyledLogo } from "./components/styles/Logo.styled";

const theme = {
  screenSwitch: "768px",
  gradient: {
    main: "linear-gradient(to right, #BDC3C7, #2C3E50)",
    inputField:
      "linear-gradient(to right, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.25))",
    inverseMain: "linear-gradient(to left, #BDC3C7, #2C3E50, #2C3E50)",
  },
  colors: {
    mainBlue: "#2C3E50",
    formBG: "rgba(255, 255, 255, .3)",
  },
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [aboutMe, setAboutMe] = useState("");
  const [jobList, setJobList] = useState([]);
  const [schoolList, setSchoolList] = useState([]);
  const [skillsList, setSkillsList] = useState([]);
  const [hobbiesList, setHobbiesList] = useState([]);
  const [awardsList, setAwardsList] = useState([]);
  const [viewForms, setViewForms] = useState(true);
  const [viewPDF, setViewPDF] = useState(false);

  // setMainState = (stateInfo) => {
  //   const keys = Object.keys(stateInfo);
  //   keys.forEach((key) => {
  //     this.setState({
  //       [key]: stateInfo[key],
  //     });
  //   });
  // };

  // appendToListState = (listID, item) => {
  //   this.setState({
  //     [listID]: [...this.state[listID], item],
  //   });
  // };

  // setAboutMe = (description) => {
  //   this.setState({
  //     aboutMe: description,
  //   });
  // };

  // deleteListItem = (listID, value) => {
  //   this.setState({
  //     [listID]: [...this.state[listID].filter((item) => item !== value)],
  //   });
  // };

  // setProfilePhoto = (url) => {
  //   this.setState({
  //     profilePhoto: url,
  //   });
  // };

  const toggleViews = () => {
    setViewForms(viewForms ? false : true);
    setViewPDF(viewPDF ? false : true);
  };

  const changeTextState = (e, cb) => {
    cb(e.target.value)
  }

  // editText = (event) => {
  //   const val = window.prompt("What would you like to edit this text to?");
  //   const text = event.target;
  //   text.innerText = val;
  // };

  // componentRef = null;

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <FormSection viewStatus={viewForms}>
          <div>
            <PersonalForm>
              <div>
                <label>First Name:</label>
                <input onChange={e => changeTextState(e, setFirstName)}></input>
              </div>
              <div>
                <label>Last Name:</label>
                <input onChange={e => changeTextState(e, setLastName)}></input>
              </div>
              <div>
                <label>Mobile:</label>
                <input onChange={e => changeTextState(e, setMobile)}></input>
              </div>
              <div>
                <label>Email:</label>
                <input onChange={e => changeTextState(e, setEmail)}></input>
              </div>
            </PersonalForm>
            {/* <AboutMe
                formSubmit={this.setAboutMe}
                submittedValue={this.state.aboutMe}
              ></AboutMe> */}
            {/* <JobForm
                formSubmit={this.appendToListState}
                history={this.state.jobList}
                deleteListItem={this.deleteListItem}
              /> */}
            {/* <SchoolForm
                formSubmit={this.appendToListState}
                history={this.state.schoolList}
                deleteListItem={this.deleteListItem}
              /> */}
          </div>

          {/* <div>
              <PhotoUpload
                setPhoto={this.setProfilePhoto}
                photo={this.state.profilePhoto}
              />
              <SkillsForm
                key={uniqid()}
                formSubmit={this.appendToListState}
                history={this.state.skillsList}
                deleteListItem={this.deleteListItem}
              />
              <HobbiesForm
                key={uniqid()}
                formSubmit={this.appendToListState}
                history={this.state.hobbiesList}
                deleteListItem={this.deleteListItem}
              />

              <AwardsForm
                key={uniqid()}
                formSubmit={this.appendToListState}
                history={this.state.awardsList}
                deleteListItem={this.deleteListItem}
              />
            </div> */}

          <div>
            <StyledLogo className="logo">CV</StyledLogo>
            <NavButtons onClick={toggleViews}>Preview PDF</NavButtons>
          </div>
        </FormSection>

        <PDFSection viewStatus={viewPDF}>
          {/* <DummyPage
            ref={(el) => (this.componentRef = el)}
            details={this.state}
          ></DummyPage>
          <StyledLogo className="logo">PDF</StyledLogo> */}
          <NavButtons onClick={toggleViews}>Edit CV</NavButtons>
          {/* <ReactToPrint
            trigger={() => {
              return <NavButtons>Print PDF</NavButtons>;
            }}
            content={() => this.componentRef}
          /> */}
        </PDFSection>
      </>
    </ThemeProvider>
  );
}

export default App;
