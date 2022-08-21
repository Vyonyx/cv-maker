import React, { useState } from 'react'
import uniqid from 'uniqid'
import { ListForm } from './FormMethods'
import { ButtonInput } from './Inputs'
import { StyledSecondaryForm, StyledHistory } from './styles/StyledForms.styled'
import { StyledButtonInput } from './styles/Inputs.styled'
import { SmallButtons } from './GeneralComponents'

// class HobbiesForm extends ListForm {
//   template = {
//     hobbyName: "",
//   };

//   deleteHistory(e, value) {
//     e.preventDefault();
//     this.props.deleteListItem("hobbiesList", value);
//   }

//   render() {
//     const { history } = this.props;
//     return (
//       <StyledSecondaryForm
//         onSubmit={(e) => {
//           this.submitListState(e, "hobbiesList", this.template);
//         }}
//       >
//         <ButtonInput
//           label="Hobby:"
//           field="hobbyName"
//           updateFunction={this.updateTemplate}
//         />
//         <StyledHistory>
//           {history.length > 0 &&
//             history.map((item) => (
//               <li key={uniqid()}>
//                 {Object.values(item)}{" "}
//                 <button onClick={(e) => this.deleteHistory(e, item)}>X</button>
//               </li>
//             ))}
//         </StyledHistory>
//       </StyledSecondaryForm>
//     );
//   }
// }

function HobbiesForm({ history, addToHistory }) {
  const [newSkill, setNewSkill] = useState('')

  const submitToHistory = () => {
    addToHistory([...history, newSkill])
    setNewSkill('')
  }

  const removeFromHistory = (skill) => {
    const found = history.find((item) => item === skill)
    const updatedHistory = history.filter((item) => item !== found)
    addToHistory(updatedHistory)
  }

  return (
    <StyledSecondaryForm>
      <StyledButtonInput>
        <label>Hobbies:</label>
        <input
          onChange={(e) => setNewSkill(e.target.value)}
          value={newSkill}
        ></input>
        <SmallButtons onClick={submitToHistory}>+</SmallButtons>
      </StyledButtonInput>
      {history.length > 0 && (
        <StyledHistory>
          {history.map((item) => (
            <li key={uniqid()}>
              {item}
              <button onClick={(e) => removeFromHistory(item)}>X</button>
            </li>
          ))}
        </StyledHistory>
      )}
    </StyledSecondaryForm>
  )
}

export default HobbiesForm
