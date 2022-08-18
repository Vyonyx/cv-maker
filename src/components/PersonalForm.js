import styled from "styled-components";

function PersonalForm(props) {
  return (
    <StyledMainForm>
      {props.children}
    </StyledMainForm>
  );
}

const StyledMainForm = styled.form`
  color: ${({ theme }) => theme.colors.mainBlue};
  background: ${({ theme }) => theme.colors.formBG};
  padding: 1rem;
  border-radius: 0.5rem;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  label {
    color: ${({ theme }) => theme.colors.mainBlue};
  }

  input {
    background: ${({ theme }) => theme.gradient.inputField};
    flex: 1;
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 1);
    border-left: 1px solid rgba(255, 255, 255, 1);
    border-radius: 0.5rem;
    height: 2rem;
    font-size: 1rem;
    padding-left: 1rem;
  }
`;

export default PersonalForm;
