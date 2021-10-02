import styled from "styled-components";
import { breakpoints } from "../GlobalStyles";

export const InputRow = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  margin-bottom: 15px;

  width: 100%;
  height: 45px;

  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 8px;

  @media (${breakpoints.s}) {
    margin-bottom: 0;
    grid-column: span 3;
  }
`;

export const Input = styled.input`
  font-family: Roboto;
  font-size: 0.875rem;

  color: ${(props) => props.theme.secondaryColor};
  background-color: inherit;

  border: none;
  outline: none;
  width: 100%;
  min-height: 100%;

  ::placeholder {
    color: ${(props) => props.theme.placeholderColor};
  }

  @media (${breakpoints.s}) {
    font-size: 0.8125rem;
  }
`;
