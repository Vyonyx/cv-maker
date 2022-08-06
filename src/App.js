import React, { Component } from "react";
import uniqid from "uniqid";
import { ThemeProvider } from "styled-components";

import PhotoUpload from "./components/PhotoUpload";
import PersonalForm from "./components/PersonalForm";
import JobForm from "./components/JobForm";
import SchoolForm from "./components/SchoolForm";
import PhotoDisplay from "./components/PhotoDisplay";
import SkillsForm from "./components/SkillsForm";
import HobbiesForm from "./components/HobbiesForm";
import AwardsForm from "./components/AwardsForm";

import GlobalStyles from "./components/styles/Global";
import {
  FormSection,
  PDFSection,
} from "./components/styles/FormSection.styled";
import { StyledLogo } from "./components/styles/Logo.styled";
import { StyledPDF } from "./components/styles/PDF.styled";
import SecondaryList from "./components/SecondaryList";

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
              <JobForm
                formSubmit={this.appendToListState}
                history={this.state.jobList}
              />
              <SchoolForm
                formSubmit={this.appendToListState}
                history={this.state.schoolList}
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
              <button onClick={this.toggleViews}>Preview PDF</button>
            </div>
          </FormSection>

          <PDFSection viewStatus={this.state.viewPDF}>
            <StyledPDF photo={this.state.profilePhoto}>
              <div className="header">
                <h1>
                  {this.state.firstName} {this.state.lastName}
                </h1>
                <div>
                  {this.state.age !== "" && <h3>Age: {this.state.age}</h3>}
                  {this.state.currentTitle !== "" && (
                    <h3>Current Title: {this.state.currentTitle}</h3>
                  )}
                  {this.state.mobile !== "" && (
                    <h3>Cell: {this.state.mobile}</h3>
                  )}
                  {this.state.email !== "" && (
                    <h3>Email: {this.state.email}</h3>
                  )}
                </div>
              </div>
              {this.state.profilePhoto && (
                <PhotoDisplay profilePhoto={this.state.profilePhoto} />
              )}
              <div className="secondary">
                {this.state.skillsList.length > 0 && (
                  <SecondaryList
                    label="Skills:"
                    items={this.state.skillsList}
                  ></SecondaryList>
                )}

                {this.state.hobbiesList.length > 0 && (
                  <SecondaryList
                    label="Hobbies:"
                    items={this.state.hobbiesList}
                  ></SecondaryList>
                )}

                {this.state.hobbiesList.length > 0 && (
                  <SecondaryList
                    label="Awards:"
                    items={this.state.awardsList}
                  ></SecondaryList>
                )}
              </div>
            </StyledPDF>
            <StyledLogo className="logo">PDF</StyledLogo>
            <button onClick={this.toggleViews}>Edit CV</button>
          </PDFSection>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
