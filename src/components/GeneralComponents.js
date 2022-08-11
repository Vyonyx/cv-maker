import styled from "styled-components";

export const NavButtons = styled.button`
  margin: 0.2rem 0;
  max-width: 15rem;
  width: 100%;
  height: 2rem;
  align-self: center;
  padding: 0 1.25rem;
  border-radius: 1rem;
  border: none;
  background: ${({ theme }) => theme.gradient.inputField};

  &:hover {
    color: white;
    background: black;
  }
`;

export const SmallButtons = styled.button`
  margin: 0.2rem 0;
  width: 1rem;
  height: 1rem;

  align-self: center;
  border-radius: 1rem;
  border: none;
  background: ${({ theme }) => theme.gradient.inputField};

  &:hover {
    color: white;
    background: black;
  }
`;
