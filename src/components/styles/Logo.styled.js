import styled from "styled-components"

export const StyledLogo = styled.h1`
    font-size: 15rem;
    font-weight: 700;
    align-self; center;
    justify-self; center;

    background: ${({ theme }) => theme.gradient.inputField};
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`