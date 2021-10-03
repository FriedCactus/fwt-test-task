import styled from "styled-components";
import { breakpoints } from "../GlobalStyles";

export const Header = styled.header`
  margin-bottom: 25px;
  max-width: 100%;

  @media (${breakpoints.s}) {
    margin-bottom: 35px;
  }
`;

export const LogoRow = styled.div`
  grid-column: span 2;
  width: 64px;
  height: 64px;
`;

export const Logo = styled.img``;

export const ThemeRow = styled.div`
  cursor: pointer;
  grid-column: -2;
  justify-self: end;
  width: 20px;
  height: 20px;
`;

export const ThemeIcon = styled.svg.attrs({
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
})`
  fill: ${(props) => props.theme.secondaryColor};
  max-width: 100%;
  transition: fill 0.3s;
`;
