import styled from "styled-components";
import breakpoints from "../GlobalStyles/breakpoints";

export const SelectRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  margin-bottom: 15px;
  width: 100%;
  grid-column: span 4;
  background-color: ${(props) => props.theme.mainColor};

  box-shadow: 0px 0px 0px 1px ${(props) => props.theme.borderColor};
  border-radius: ${(props) => (props.isOpen ? "8px 8px 0 0" : "8px")};

  @media (${breakpoints.s}) {
    grid-column: span 3;
    margin-bottom: 0;
  }
`;

//Label

export const LabelRow = styled.div`
  cursor: pointer;
  user-select: none;
  overflow: hidden;

  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 45px;
`;

export const LabelText = styled.span`
  font-size: 0.875rem;

  padding-right: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media (${breakpoints.s}) {
    font-size: 0.8125rem;
  }
`;

export const LabelIconRow = styled.div`
  display: flex;
  width: 10px;
  height: 6px;

  transition: all 0.3s;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "")};
`;

export const LabelIcon = styled.svg.attrs({
  viewBox: "0 0 10 6",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
})`
  fill: ${(props) => props.theme.placeholderColor};
  max-width: 100%;
  transition: fill 0.3s;
`;

// List

export const List = styled.ul`
  box-sizing: border-box;
  cursor: pointer;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 400px;
  overflow: hidden;

  font-weight: 500;
  line-height: 125%;

  box-shadow: 0px 0px 0px 1px ${(props) => props.theme.borderColor};
  border-radius: 0 0 8px 8px;
  background-color: inherit;

  z-index: 1;

  @media (${breakpoints.s}) {
    max-height: 355px;
  }

  @media (${breakpoints.s}) {
    max-height: 300px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0 30px;
  width: 100%;
  height: 40px;

  overflow: hidden;

  :hover {
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.mainColor};
  }

  @media (${breakpoints.s}) {
    padding: 0 15px;
  }

  @media (${breakpoints.s}) {
    padding: 0 22px;
  }
`;

export const ListText = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
