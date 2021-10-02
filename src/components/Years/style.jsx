import styled from "styled-components";
import breakpoints from "../GlobalStyles/breakpoints";

export const SelectRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 15px;
  grid-column: span 4;
  background-color: ${(props) => props.theme.mainColor};

  box-shadow: 0px 0px 0px 1px ${(props) => props.theme.borderColor};
  border-radius: ${(props) => (props.isOpen ? "8px 8px 0 0" : "8px")};

  @media (${breakpoints.s}) {
    grid-column: span 3;
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

//YearsMenu

export const YearsMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;

  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  padding: 20px 15px;
  width: 100%;
  background-color: inherit;
  transition: all 0.3s;

  box-shadow: 0px 0px 0px 1px ${(props) => props.theme.borderColor};
  border-radius: 0 0 8px 8px;

  z-index: 1;

  @media (${breakpoints.s}) {
    flex-direction: column;
  }

  @media (${breakpoints.l}) {
    flex-direction: row;
  }
`;

export const YearsInputRow = styled.div`
  flex: 0 1 auto;
  display: flex;
  align-items: center;
  padding: 15px;
  max-width: 110px;
  width: 100%;
  height: 45px;

  background-color: ${(props) => props.theme.filtersInputColor};
  border-radius: 8px;
  overflow: hidden;
`;

export const YearsInput = styled.input.attrs({
  type: "number",
})`
  flex: 1 1 auto;
  width: 0;

  outline: none;
  border: none;
  background-color: inherit;

  font-family: Roboto;
  font-size: 0.92rem;
  line-height: 115%;

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  @media (${breakpoints.s}) {
    font-size: 0.8125rem;
  }
`;

export const YearsMenuDash = styled.span`
  display: inline-block;
  margin: 0 6px;
  width: 12px;
  height: 2px;
  background-color: ${(props) => props.theme.secondaryColor};

  @media (${breakpoints.s}) {
    margin: 15px 0;
  }

  @media (${breakpoints.l}) {
    margin: 0 10px;
  }
`;
