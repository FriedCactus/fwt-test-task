import styled from "styled-components";
import { breakpoints } from "../GlobalStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 280px;
  min-height: 100vh;

  @media (${breakpoints.s}) {
    max-width: 700px;
  }

  @media (${breakpoints.m}) {
    max-width: 940px;
  }

  @media (${breakpoints.l}) {
    max-width: 1120px;
  }
`;
