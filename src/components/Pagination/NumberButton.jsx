import React from "react";
import PropTypes from "prop-types";
import * as S from "./style";

const NumberButton = ({ number, isActive }) => (
  <S.NumberButton isActive={isActive}>{number}</S.NumberButton>
);

NumberButton.propTypes = {
  number: PropTypes.number,
  isActive: PropTypes.bool,
};

export default NumberButton;
