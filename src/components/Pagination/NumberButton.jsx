import React from "react";
import PropTypes from "prop-types";
import * as S from "./style";

const NumberButton = ({ number }) => <S.NumberButton>{number}</S.NumberButton>;

NumberButton.propTypes = {
  number: PropTypes.string,
};

export default NumberButton;
