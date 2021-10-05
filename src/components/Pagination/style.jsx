import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../GlobalStyles";

// заготовки кнопок
const pageButton = styled.button`
  cursor: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0;

  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.secondaryColor};

  @media (${breakpoints.m}) {
    :not(:disabled):hover {
      background-color: ${(props) => props.theme.secondaryColor};
      color: ${(props) => props.theme.mainColor};
    }
  }
`;

const arrowButton = styled(pageButton)`
  svg {
    path {
      fill: ${(props) => props.theme.secondaryColor};
    }
  }

  :disabled {
    svg {
      path {
        fill: ${(props) => props.theme.disabledButtonColor};
      }
    }
  }

  @media (${breakpoints.m}) {
    :not(:disabled):hover {
      svg {
        path {
          fill: ${(props) => props.theme.mainColor};
        }
      }
    }
  }
`;

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
  overflow: hidden;
  text-decoration: none;
  width: 41px;
  height: 41px;

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
`;

// Кнопки-стрелки
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

// Кнопки страниц
export const NumberButton = styled(pageButton)`
  background-color: ${(props) =>
    props.isActive ? props.theme.secondaryColor : ""};
  color: ${(props) => (props.isActive ? props.theme.mainColor : "")};
`;
