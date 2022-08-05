import styled from "styled-components"

export const StyledPhotoUpload = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.mainBlue};
    background: ${({ theme }) => theme.colors.formBG};
    padding: 1rem;
    border-radius: .5rem;
    min-height: 50px;

    input {
        color: rgba(0, 0, 0, 0);
    }

    input::file-selector-button {
        width: 100%;
        height: 2rem;
        align-self: center;
        padding: 0 1.25rem;
        border-radius: 1rem;
        border: none;
        background: ${({ theme }) => theme.gradient.inputField};
    }

    div {
        width: 50vw;
        height: 50vw;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
    }

    @media(min-width: 768px) {
        div {
            width: 20vw;
            height: 20vw;
        }
    }
`