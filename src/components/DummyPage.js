import uniqid from 'uniqid'
import React, { Component } from 'react'
import styled from 'styled-components'

function PDFPage({
  firstName,
  lastName,
  mobile,
  email,
  profilePhoto,
  aboutMe,
  skillsList,
  awardsList,
  hobbiesList,
  jobList,
  schoolList,
}) {
  return (
    <StyledPage>
      <Personal>
        <section>
          <div>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
          </div>
        </section>
        <section>
          {mobile !== '' && <h4>Mobile: {mobile}</h4>}
          {email !== '' && <h4>Email: {email}</h4>}
        </section>
      </Personal>

      <Secondary>
        {profilePhoto !== null && <img src={profilePhoto} alt=""></img>}

        {aboutMe !== '' && (
          <div>
            <h2>About Me:</h2>
            <p>{aboutMe}</p>
          </div>
        )}

        {skillsList.length > 0 && (
          <div>
            <h2>Skills:</h2>
            <ul>
              {skillsList.map((item) => (
                <li key={uniqid()}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {awardsList.length > 0 && (
          <div>
            <h2>Awards:</h2>
            <ul>
              {awardsList.map((item) => (
                <li key={uniqid()}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {hobbiesList.length > 0 && (
          <div>
            <h2>Hobbies:</h2>
            <ul>
              {hobbiesList.map((item) => (
                <li key={uniqid()}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </Secondary>

      <Primary>
        <h1>Work Experience:</h1>
        {jobList.map((item) => {
          return (
            <JobDetails key={uniqid()}>
              <h3>{item.company}</h3>
              <h3>{item.title}</h3>
              <div>
                <h4>{item.city}</h4>
                {item.from !== '' && item.to !== '' && (
                  <h4>
                    {item.from} - {item.to}
                  </h4>
                )}
              </div>
              <p>{item.description}</p>
            </JobDetails>
          )
        })}

        <h1>Education:</h1>
        {schoolList.map((item) => {
          return (
            <JobDetails key={uniqid()}>
              <h3>{item.degree}</h3>
              <h3>{item.school}</h3>
              <div>
                <h4>{item.city}</h4>
                {item.from !== '' && item.to !== '' && (
                  <h4>
                    {item.from} - {item.to}
                  </h4>
                )}
              </div>
              <p>{item.description}</p>
            </JobDetails>
          )
        })}

        <Reference>References will be provided on request.</Reference>
      </Primary>
    </StyledPage>
  )
}

export default PDFPage

const StyledPage = styled.div`
  width: 210mm;
  height: 297mm;
  background: white;
  padding: 1px;

  display: grid;
  grid:
    'secondary personal' 50mm
    'secondary primary' 1fr /
    75mm 1fr;
`

const Personal = styled.div`
    grid-area: personal;
    padding: 2rem 2rem 2rem 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: left;
    gap: 2rem;
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.5);

    h1 {
        font-size: 20pt;
    }
    h2 {
        font-size: 10pt;
    }
    h3 {
        font-size: 10pt;
    }
    h4 {
        font-size: 8pt;
    }
    section {
        display: grid;
        grid-auto-rows; auto;
        gap: 0.5rem;
    }
`

const Secondary = styled.div`
  grid-area: secondary;
  color: white;
  background: #333333;

  display: grid;
  grid-auto-rows: max-content;
  gap: 2rem 1rem;
  justify-items: center;
  padding: 2rem;

  img {
    width: 60mm;
    height: 60mm;
    border-radius: 50mm;
    border: 3px solid white;
  }

  div {
    width: 100%;
  }

  h2 {
    font-size: 15pt;
    margin: 1rem 0;
    border-bottom: 1px solid white;
  }
  p {
    font-size: 8pt;
  }
  ul {
    list-style: inside;
    li {
      margin: 0.5rem 0;
    }
  }
`

const Primary = styled.div`
  position: relative;
  grid-area: primary;
  padding: 2rem;
  h1 {
    font-size: 20pt;
    margin: 1rem 0;
    padding: 1rem 0;
    border-bottom: 1px solid black;
  }
  > div {
    margin-bottom: 3rem;
  }
`

const JobDetails = styled.div`
  display: grid;
  grid:
    'company title' 1fr
    'citydates description' 1fr /
    1fr 2fr;
  gap: 0.5rem;
  align-items: end;

  h3 {
    font-size: 10pt;
  }
  h4 {
    font-size: 8pt;
    color: grey;
  }
  p {
    font-size: 8pt;
  }
`

const Reference = styled.h3`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 2rem;
  width: max-content;
  font-size: 0.75rem;
  font-style: italic;
  color: grey;
`
