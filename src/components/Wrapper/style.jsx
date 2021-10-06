import styled from "styled-components";
import { breakpoints } from "../GlobalStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 20px 34px;
  min-height: 100vh;

  @media (${breakpoints.s}) {
    padding-top: 35px;
    padding-bottom: 54px;
  }

  @media (${breakpoints.m}) {
    padding-bottom: 62px;
  }

  @media (${breakpoints.l}) {
    padding-bottom: 97px;
  }
`;
