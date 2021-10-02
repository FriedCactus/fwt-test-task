import styled from "styled-components";
import { breakpoints } from "../GlobalStyles";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 55px));
  column-gap: 20px;

  @media (${breakpoints.s}) {
    grid-template-columns: repeat(12, minmax(auto, 40px));
  }

  @media (${breakpoints.m}) {
    grid-template-columns: repeat(12, minmax(auto, 60px));
  }

  @media (${breakpoints.l}) {
    grid-template-columns: repeat(12, minmax(auto, 75px));
  }
`;
