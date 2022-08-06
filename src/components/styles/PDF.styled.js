import styled from "styled-components"

export const StyledPDF = styled.article`
    width: ${210 * 0.75}mm;
    height: ${297 * 0.75}mm;
    margin: 3rem 0;
    background: white;

    @media(min-width: ${({ theme }) => theme.screenSwitch}) {
        width: 210mm;
        height: 297mm;
    }
`