import styled from "styled-components";
import { breakpoints } from "../GlobalStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px auto 34px;
  padding: 0 20px;
  min-height: 100vh;

  @media (${breakpoints.s}) {
    margin: 35px auto 54px;
  }

  @media (${breakpoints.m}) {
    margin-bottom: 62px;
  }

  @media (${breakpoints.l}) {
    margin-bottom: 97px;
  }
`;
