import styled from "styled-components";
import { breakpoints } from "../GlobalStyles";

export const Input = styled.input`
  font-family: Roboto;
  font-size: 1rem;
  line-height: 114%;
  color: ${(props) => props.theme.secondaryColor};
  background-color: inherit;

  border: none;
  outline: none;
  width: 100%;
  min-height: 100%;
  padding: 0;

  ::placeholder {
    color: ${(props) => props.theme.placeholderColor};
  }

  @media (${breakpoints.s}) {
    font-size: 0.92rem;
  }
`;
