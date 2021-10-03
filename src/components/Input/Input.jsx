import React from "react";
import PropTypes from "prop-types";
import * as S from "./style";

const Input = ({ placeholder }) => (
  <S.InputRow>
    <S.Input placeholder={placeholder} />
  </S.InputRow>
);

Input.propTypes = {
  placeholder: PropTypes.string,
};

export default Input;
