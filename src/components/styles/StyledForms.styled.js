import styled from "styled-components"

export const StyledSecondaryForm = styled.form`
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
    border-radius: .5rem;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
        color: ${({ theme }) => theme.colors.mainBlue}
    }

    input {
        // background: ${({ theme }) => theme.gradient.inputField};
        border: none;
        border-top: 1px solid rgba(255, 255, 255, 1);
        border-left: 1px solid rgba(255, 255, 255, 1);
        border-radius: .5rem;
        height: 2rem;
        font-size: 1rem;
        padding-left: 1rem;
    }

    button {
        max-width: 70%;
        height: 2rem;
        align-self: center;
        padding: 0 1.25rem;
        border-radius: 1rem;
        border: none;
        background: ${({ theme }) => theme.gradient.inputField};
    }
`

export const StyledHistory = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
        padding: 0.5rem;
        padding-left: 1rem;
        border: none;
        border-top: 1px solid rgba(255, 255, 255, 0.75);
        border-left: 1px solid rgba(255, 255, 255, 0.75);
        border-radius: 0.5rem;
        color: white;
        background: ${({ theme }) => theme.gradient.inverseMain}
    }
`