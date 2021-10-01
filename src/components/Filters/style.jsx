import styled from "styled-components";
import { breakpoints } from "../GlobalStyles";

export const ElementRow = styled.div`
  display: flex;
  width: 100%;
  min-height: 45px;
  height: fit-content;
  grid-column: span 4;
  margin-bottom: 15px;
  padding: 0 15px;
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 8px;
  border: ${(props) => `1px solid ${props.theme.borderColor}`};

  &:last-child {
    margin-bottom: 0;
  }

  @media (${breakpoints.s}) {
    grid-column: span 3;
    margin-bottom: 0;
  }
`;
