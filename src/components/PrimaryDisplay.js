import React, { Component } from "react";
import { StyledPrimaryHeading } from "./styles/PrimaryHeading.styled";
import styled from "styled-components";

export class PrimaryWorkDisplay extends Component {
  render() {
    const { label, list } = this.props;
    return (
      <div>
        <StyledPrimaryHeading>{label}</StyledPrimaryHeading>
        {list.map((item) => {
          return (
            <StyledWorkItem>
              <div>
                {item.company && (
                  <StyledSubHeading>{item.company}</StyledSubHeading>
                )}
                {item.city && (
                  <StyledLocation>{item.city}</StyledLocation>
                )}
                {item.from && item.to && (
                  <StyledAccentHeading>
                    {item.from} - {item.to}
                  </StyledAccentHeading>
                )}
              </div>
              <div>
                {item.title && (
                  <StyledSubHeading>{item.title}</StyledSubHeading>
                )}
                {item.description && (
                  <StyledParagraph>{item.description}</StyledParagraph>
                )}
              </div>
            </StyledWorkItem>
          );
        })}
      </div>
    );
  }
}

export class PrimarySchoolDisplay extends Component {
  render() {
    const { label, list } = this.props;
    return (
      <div>
        <StyledPrimaryHeading>{label}</StyledPrimaryHeading>
        {list.map((item) => {
          return (
            <StyledWorkItem>
              <div>
                {item.school && (
                  <StyledSubHeading>{item.school}</StyledSubHeading>
                )}
                {item.city && <StyledLocation>{item.city}</StyledLocation>}
                {item.from && item.to && (
                  <StyledAccentHeading>
                    {item.from} - {item.to}
                  </StyledAccentHeading>
                )}
              </div>
              <div>
                {item.degree && (
                  <StyledSubHeading>{item.degree}</StyledSubHeading>
                )}
                {item.description && (
                  <StyledParagraph>{item.description}</StyledParagraph>
                )}
              </div>
            </StyledWorkItem>
          );
        })}
      </div>
    );
  }
}

const StyledWorkItem = styled.div`
  display: grid;
  grid-template-columns: 35% 1fr;
  margin: 3rem 0;
`;

const StyledSubHeading = styled.h3`
  font-size: 1rem;
  margin: 0 0 1rem;
`;

const StyledAccentHeading = styled.h5`
  margin: 0 0 1rem;
  font-size: 0.75rem;
  text-style: italic;
  color: darkgrey;
`;

const StyledParagraph = styled.p`
  margin: 1rem 0;
  font-size: 0.65rem;
`;

const StyledLocation = styled.h5`
  font-size: 0.75rem;
  text-style: italic;
  color: darkgrey;
`;
