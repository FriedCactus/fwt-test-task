import styled from "styled-components";
import { breakpoints } from "../GlobalStyles";

// Template buttons
const pageButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 41px;
  height: 41px;

  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.secondaryColor};
  border: 1px solid
    ${(props) =>
      props.isDisabled
        ? props.theme.disabledButtonColor
        : props.theme.secondaryColor};
  border-right: none;

  :first-child {
    border-radius: 8px 0 0 8px;
  }

  :last-child {
    border-radius: 0 8px 8px 0;
    border-right: 1px solid
      ${(props) =>
        props.isDisabled
          ? props.theme.disabledButtonColor
          : props.theme.secondaryColor};
  }

  :hover {
    background-color: ${(props) =>
      props.isDisabled ? "" : props.theme.secondaryColor};
    color: ${(props) => (props.isDisabled ? "" : props.theme.mainColor)};
  }
`;

const arrowButton = styled(pageButton)`
  svg {
    path {
      fill: ${(props) =>
        props.isDisabled
          ? props.theme.disabledButtonColor
          : props.theme.secondaryColor};
    }
  }

  :hover {
    svg {
      path {
        fill: ${(props) => (props.isDisabled ? "" : props.theme.mainColor)};
      }
    }
  }
`;

export const Pagination = styled.div`
  grid-column: span 4;
  display: flex;

  @media (${breakpoints.m}) {
    grid-column: span 3;
  }
`;

export const ArrowButton = styled(arrowButton)``;

export const DoubleArrowButton = styled(arrowButton)``;

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

export const NumberButton = styled(pageButton)``;
