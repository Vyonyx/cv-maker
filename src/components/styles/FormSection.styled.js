import styled from "styled-components"

export const FormSection = styled.section`
    display: grid;
    grid-template-rows: 1fr;
    padding: 1rem;
    gap: 1rem;

    > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .logo {
            align-self: center;
        }
    }

    @media(min-width: ${({ theme }) => theme.screenSwitch}) {
        grid: 
            'sidebar main logo' 1fr /
            1fr 2fr 1fr;
        
        & > :nth-child(1) {
            grid-area: main;
        }

        & > :nth-child(2) {
            grid-area: sidebar;
        }
    }

    ${({ viewStatus }) => !viewStatus && `
        display: none;
    `}
`

export const PDFSection = styled.section`
    height: 100%;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    ${({ viewStatus }) => !viewStatus && `
        display: none;
    `}
`