import styled from "styled-components";
import { breakpoints } from "../GlobalStyles";

export const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media (${breakpoints.s}) {
    grid-template-columns: repeat(12, 1fr);
  }
`;
