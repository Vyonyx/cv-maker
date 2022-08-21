import styled from 'styled-components'

export const StyledSecondaryForm = styled.div`
  color: ${({ theme }) => theme.colors.mainBlue};
  background: ${({ theme }) => theme.colors.formBG};
  padding: 1rem;
  border-radius: 0.5rem;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    color: ${({ theme }) => theme.colors.mainBlue};
  }

  input {
    background: ${({ theme }) => theme.gradient.inputField};
    border: none;
    border-top: 2px solid rgba(255, 255, 255, 0.5);
    border-left: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 0.5rem;
    height: 2rem;
    font-size: 1rem;
    padding-left: 1rem;
  }

  button {
    min-width: 2rem;
    min-height: 2rem;
    border-radius: 1rem;
    border: none;
    background: ${({ theme }) => theme.gradient.inputField};
  }
`

export const StyledMainForm = styled.form`
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
`

export const StyledHistory = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0.5rem;
    padding-left: 1rem;
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.75);
    border-left: 1px solid rgba(255, 255, 255, 0.75);
    border-radius: 0.5rem;
    color: white;
    background: ${({ theme }) => theme.gradient.inverseMain};

    button {
      width: 1.5rem;
      height: 1.5rem;
      padding: 0;
      background: white;
      color: black;

      &:hover {
        color: white;
        background: black;
      }
    }
  }
`
