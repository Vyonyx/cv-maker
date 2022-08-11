import React, { Component } from "react";
import { StyledMainForm } from "./styles/StyledForms.styled";
import { StyledTextArea } from "./styles/AboutMe.styled";
import { NavButtons } from "./GeneralComponents";

export class AboutMe extends Component {
  state = {
    aboutMe: "",
  };

  updateAboutMe = (e) => {
    this.setState({
      aboutMe: e.target.value,
    });
  };

  submitAboutMe = (e) => {
    e.preventDefault();
    this.props.formSubmit(this.state.aboutMe);
  };

  render() {
    return (
      <StyledMainForm onSubmit={this.submitAboutMe}>
        <StyledTextArea
          onChange={this.updateAboutMe}
          placeholder="Description about yourself..."
          currentValue={this.state.aboutMe}
          submittedValue={this.props.submittedValue}
        ></StyledTextArea>
        <NavButtons>Submit About Me</NavButtons>
      </StyledMainForm>
    );
  }
}

export default AboutMe;
