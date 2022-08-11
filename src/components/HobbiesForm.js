import uniqid from "uniqid";
import { ListForm } from "./FormMethods";
import { ButtonInput } from "./Inputs";
import {
  StyledSecondaryForm,
  StyledHistory,
} from "./styles/StyledForms.styled";

class HobbiesForm extends ListForm {
  template = {
    hobbyName: "",
  };

  deleteHistory(e, value) {
    e.preventDefault();
    this.props.deleteListItem("hobbiesList", value);
  }

  render() {
    const { history } = this.props;
    return (
      <StyledSecondaryForm
        onSubmit={(e) => {
          this.submitListState(e, "hobbiesList", this.template);
        }}
      >
        <ButtonInput
          label="Hobby:"
          field="hobbyName"
          updateFunction={this.updateTemplate}
        />
        <StyledHistory>
          {history.length > 0 &&
            history.map((item) => (
              <li key={uniqid()}>
                {Object.values(item)}{" "}
                <button onClick={(e) => this.deleteHistory(e, item)}>X</button>
              </li>
            ))}
        </StyledHistory>
      </StyledSecondaryForm>
    );
  }
}

export default HobbiesForm;
