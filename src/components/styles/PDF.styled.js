import styled from "styled-components"

export const StyledPDF = styled.article`
    width: ${210 * 0.75}mm;
    height: ${297 * 0.75}mm;
    margin: 3rem 0;
    background: darkgrey;

    display: grid;
    grid:
        'header photo' 50mm
        'primary secondary' 1fr /
        1fr 50mm;
    gap: 0.5rem;
    padding: 0.5rem;
    
    .header {
        grid-area: header;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        background: lightgrey;

        h1 {
            font-size: 3rem;
        }

        div {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            
            h3 {
                font-size: 1rem;
                color: grey;
            }
        }
    }
    
    .photo {
        grid-area: photo;
    }

    @media(min-width: ${({ theme }) => theme.screenSwitch}) {
        width: 210mm;
        height: 297mm;

        grid:
            'header photo' 65mm
            'primary secondary' 1fr /
            1fr 65mm;
    }
`