import styled from "styled-components"

export const StyledInput = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: .5rem;
    align-items: center;
    
    input {
        flex: 1;
        background: ${({ theme }) => theme.gradient.inputField};
    }

    ${({ defaultValue, submittedValue }) => defaultValue === submittedValue &&
        submittedValue !== '' && `

        input {
            color: white;
            background: linear-gradient(to left, #BDC3C7, #2C3E50, #2C3E50);
        }

    `}
`
export const StyledListInput = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: .5rem;
    align-items: center;

    input {
        flex: 1;
    }
`

export const StyledButtonInput = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: .5rem;
    align-items: center;

    input {
        flex: 1;
    }
`