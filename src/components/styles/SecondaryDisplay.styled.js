import styled from "styled-components"

export const StyledSecondaryList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    ul {
        list-style: inside;
        li {
            margin: 0.25rem 0;
            font-style: italic;
            font-size: 1rem;
        }
    }
`