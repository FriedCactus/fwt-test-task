import PropTypes from "prop-types";
import React from "react";
import * as S from "./style";

const Wrapper = ({ children }) => <S.Wrapper>{children}</S.Wrapper>;

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
