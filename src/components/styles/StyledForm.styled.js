import styled from "styled-components"

export const StyledForm = styled.form`
    color: ${({ theme }) => theme.colors.mainBlue};
    background: ${({ theme }) => theme.colors.formBG};
    padding: 1rem;
    border-radius: .5rem;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
        color: ${({ theme }) => theme.colors.mainBlue}
    }

    input {
        background: ${({ theme }) => theme.gradient.inputField};
        border: none;
        border-top: 2px solid rgba(255, 255, 255, .5);
        border-left: 2px solid rgba(255, 255, 255, .5);
        border-radius: .5rem;
        height: 2rem;
        font-size: 1rem;
        padding-left: 1rem;
    }

    button {
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
        border: none;
        background: ${({ theme }) => theme.gradient.inputField};
    }
`