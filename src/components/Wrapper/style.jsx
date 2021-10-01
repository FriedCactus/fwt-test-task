import styled from "styled-components";
import { breakpoints } from "../GlobalStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  margin: 0 auto;
  max-width: 1120px;
  min-height: 100vh;

  @media (${breakpoints.s}) {
    padding: 0 34px;
  }

  @media (${breakpoints.m}) {
    padding: 0 42px;
  }
`;
