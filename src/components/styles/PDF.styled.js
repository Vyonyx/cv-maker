import styled from "styled-components"

export const StyledPDF = styled.article`
    width: ${210 * 0.75}mm;
    height: ${297 * 0.75}mm;
    margin: 3rem 0;
    background: white;
    padding: 1rem;

    display: grid;
    grid:
        'name photo' 50mm
        'primary secondary' 1fr /
        1fr 50mm;
    
    .photo {
        grid-area: photo;
    }

    @media(min-width: ${({ theme }) => theme.screenSwitch}) {
        width: 210mm;
        height: 297mm;

        grid:
            'name photo' 65mm
            'primary secondary' 1fr /
            1fr 65mm;
    }
`