import styled from "styled-components";
import breakpoints from "../GlobalStyles/breakpoints";

//Select

export const SelectRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  padding-right: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
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

//List Menu

//YearsMenu

export const YearsMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  transition: all 0.3s;

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
  width: 110px;
  height: 45px;
  background-color: ${(props) => props.theme.filtersInputColor};
  border-radius: 8px;
  overflow: hidden;
`;

export const YearsInput = styled.input.attrs({
  type: "number",
})`
  padding: 15px;
  outline: none;
  border: none;
  background-color: inherit;

  font-family: Roboto;
  font-size: 0.92rem;
  line-height: 115%;

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
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
