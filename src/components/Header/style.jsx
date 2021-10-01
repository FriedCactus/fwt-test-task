import styled from "styled-components";
import { breakpoints } from "../GlobalStyles";

export const Header = styled.header`
  padding: 25px 0;
  width: 100%;

  @media (${breakpoints.s}) {
    padding: 35px 0;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoRow = styled.div`
  flex: 0 0 64px;
`;

export const Logo = styled.img``;

export const ThemeRow = styled.div`
  cursor: pointer;
  flex: 0 0 20px;
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
