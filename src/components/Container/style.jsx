import styled from "styled-components";
import { breakpoints } from "../GlobalStyles";

export const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, minmax(0, 55px));
  column-gap: 20px;

  @media (${breakpoints.s}) {
    grid-template-columns: repeat(12, minmax(0, 40px));
  }

  @media (${breakpoints.m}) {
    grid-template-columns: repeat(12, minmax(0, 60px));
  }

  @media (${breakpoints.l}) {
    grid-template-columns: repeat(12, minmax(0, 75px));
  }
`;
