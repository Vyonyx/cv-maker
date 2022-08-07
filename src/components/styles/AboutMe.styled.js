import styled from "styled-components";

export const StyledTextArea = styled.textarea`
    height: 50%;
    background: ${({ theme }) => theme.gradient.inputField};
    font-size: 1rem;
    font-family: inherit;
    padding: 1rem;
    border-radius: 0.5rem;
    resize: none;
`