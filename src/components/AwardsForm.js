import React, { useState } from 'react'
import uniqid from 'uniqid'
import { ListForm } from './FormMethods'
import { ButtonInput } from './Inputs'
import { StyledSecondaryForm, StyledHistory } from './styles/StyledForms.styled'
import { StyledButtonInput } from './styles/Inputs.styled'
import { SmallButtons } from './GeneralComponents'

// class AwardsForm extends ListForm {
//   template = {
//     award: "",
//   };

//   deleteHistory(e, value) {
//     e.preventDefault();
//     this.props.deleteListItem("awardsList", value);
//   }

//   render() {
//     const { history } = this.props;
//     return (
//       <StyledSecondaryForm
//         onSubmit={(e) => {
//           this.submitListState(e, "awardsList", this.template);
//         }}
//       >
//         <ButtonInput
//           label="Award:"
//           field="award"
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

function AwardsForm({ history, addToHistory }) {
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
        <label>Awards:</label>
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

export default AwardsForm
