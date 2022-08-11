import React, { Component } from "react";
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

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      currentTitle: "",
      age: "",
      mobile: "",
      email: "",
      profilePhoto: null,
      aboutMe: "",
      jobList: [],
      schoolList: [],
      skillsList: [],
      hobbiesList: [],
      awardsList: [],
      viewForms: true,
      viewPDF: false,
    };
  }

  setMainState = (stateInfo) => {
    const keys = Object.keys(stateInfo);
    keys.forEach((key) => {
      this.setState({
        [key]: stateInfo[key],
      });
    });
  };

  appendToListState = (listID, item) => {
    this.setState({
      [listID]: [...this.state[listID], item],
    });
  };

  setAboutMe = (description) => {
    this.setState({
      aboutMe: description,
    });
  };

  deleteListItem = (listID, value) => {
    this.setState({
      [listID]: [...this.state[listID].filter((item) => item !== value)],
    });
  };

  setProfilePhoto = (url) => {
    this.setState({
      profilePhoto: url,
    });
  };

  toggleViews = () => {
    this.setState({
      viewForms: this.state.viewForms === true ? false : true,
      viewPDF: this.state.viewPDF === true ? false : true,
    });
  };

  editText = (event) => {
    const val = window.prompt("What would you like to edit this text to?");
    const text = event.target;
    text.innerText = val;
  };

  componentRef = null;

  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />

          <FormSection viewStatus={this.state.viewForms}>
            <div>
              <PersonalForm
                formSubmit={this.setMainState}
                submittedInfo={this.state}
              />
              <AboutMe
                formSubmit={this.setAboutMe}
                submittedValue={this.state.aboutMe}
              ></AboutMe>
              <JobForm
                formSubmit={this.appendToListState}
                history={this.state.jobList}
                deleteListItem={this.deleteListItem}
              />
              <SchoolForm
                formSubmit={this.appendToListState}
                history={this.state.schoolList}
                deleteListItem={this.deleteListItem}
              />
            </div>

            <div>
              <PhotoUpload
                setPhoto={this.setProfilePhoto}
                photo={this.state.profilePhoto}
              />
              <SkillsForm
                key={uniqid()}
                formSubmit={this.appendToListState}
                history={this.state.skillsList}
              />
              <HobbiesForm
                key={uniqid()}
                formSubmit={this.appendToListState}
                history={this.state.hobbiesList}
              />

              <AwardsForm
                key={uniqid()}
                formSubmit={this.appendToListState}
                history={this.state.awardsList}
              />
            </div>

            <div>
              <StyledLogo className="logo">CV</StyledLogo>
              <NavButtons onClick={this.toggleViews}>Preview PDF</NavButtons>
            </div>
          </FormSection>

          <PDFSection viewStatus={this.state.viewPDF}>
            <DummyPage
              ref={(el) => (this.componentRef = el)}
              details={this.state}
            ></DummyPage>
            <StyledLogo className="logo">PDF</StyledLogo>
            <NavButtons onClick={this.toggleViews}>Edit CV</NavButtons>
            <ReactToPrint
              trigger={() => {
                return <NavButtons>Print PDF</NavButtons>;
              }}
              content={() => this.componentRef}
            />
          </PDFSection>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
