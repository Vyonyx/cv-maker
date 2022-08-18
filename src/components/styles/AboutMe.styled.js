import styled from "styled-components";

export const StyledTextArea = styled.textarea`
  height: 100%;
  background: ${({ theme }) => theme.gradient.inputField};
  font-size: 1rem;
  font-family: inherit;
  padding: 1rem;
  border: none;
  border-top: 1px solid white;
  border-left: 1px solid white;
  border-radius: 0.5rem;
  resize: none;
`;
