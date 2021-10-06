import { observer } from "mobx-react-lite";
import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";

const Label = observer(({ title, text }) => (
  <S.LabelRow>
    <S.LabelTitle>{title}</S.LabelTitle>
    <S.LabelText>{text}</S.LabelText>
  </S.LabelRow>
));

Label.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Label;
