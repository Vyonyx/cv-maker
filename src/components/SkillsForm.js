import uniqid from "uniqid";
import { ListForm } from "./FormMethods";
import { ButtonInput } from "./Inputs";
import {
  StyledSecondaryForm,
  StyledHistory,
} from "./styles/StyledForms.styled";

class SkillsForm extends ListForm {
  template = {
    skillName: "",
  };

  deleteHistory(e, value) {
    e.preventDefault();
    this.props.deleteListItem("skillsList", value);
  }

  render() {
    const { history } = this.props;
    return (
      <StyledSecondaryForm
        onSubmit={(e) => {
          this.submitListState(e, "skillsList", this.template);
        }}
      >
        <ButtonInput
          label="Skill:"
          field="skillName"
          updateFunction={this.updateTemplate}
        />
        <StyledHistory>
          {history.length > 0 &&
            history.map((item) => (
              <li key={uniqid()}>
                {Object.values(item)}{" "}
                <button onClick={e => this.deleteHistory(e, item)}>X</button>
              </li>
            ))}
        </StyledHistory>
      </StyledSecondaryForm>
    );
  }
}

export default SkillsForm;
