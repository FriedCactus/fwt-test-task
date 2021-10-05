import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../GlobalStyles";

// Пагинация
export const Pagination = styled.div`
  grid-column: span 4;
  display: flex;

  @media (${breakpoints.m}) {
    grid-column: span 3;
  }
`;

// Линк
export const StyledLink = styled(Link)`
  cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 41px;
  height: 41px;
  border: none;
  border-radius: 0;

  text-decoration: none;

  border: 1px solid
    ${(props) =>
      props.disabled
        ? props.theme.disabledButtonColor
        : props.theme.secondaryColor};
  border-right: none;
  z-index: 1;

  :first-child {
    border-radius: 8px 0 0 8px;
  }

  :last-child {
    border-radius: 0 8px 8px 0;

    border-right: 1px solid
      ${(props) =>
        props.disabled
          ? props.theme.disabledButtonColor
          : props.theme.secondaryColor};
  }

  @media (${breakpoints.l}) {
    :hover {
      background-color: ${(props) =>
        props.disabled ? "" : props.theme.secondaryColor};
      color: ${(props) => (props.disabled ? "" : props.theme.mainColor)};
    }
  }
`;

export const ArrowLink = styled(StyledLink)`
  svg {
    path {
      fill: ${(props) =>
        props.disabled
          ? props.theme.disabledButtonColor
          : props.theme.secondaryColor};
    }
  }

  @media (${breakpoints.l}) {
    :hover {
      svg {
        path {
          fill: ${(props) => (props.disabled ? "" : props.theme.mainColor)};
        }
      }
    }
  }
`;

// Кнопки-стрелки

export const ArrowButtonIcon = styled.svg.attrs({
  viewBox: "0 0 9 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
})`
  width: 7.69px;
  height: 12.81px;
`;

export const DoubleArrowButtonIcon = styled.svg.attrs({
  viewBox: "0 0 14 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
})`
  width: 13.45px;
  height: 12.81px;
`;

// Кнопки страниц
export const NumberLink = styled(StyledLink)`
  background-color: ${(props) =>
    props.active ? props.theme.secondaryColor : ""};
  color: ${(props) => (props.active ? props.theme.mainColor : "")};
`;
