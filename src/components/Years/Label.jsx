import React from "react";
import { observer } from "mobx-react-lite";
import PropTypes from "prop-types";

import * as S from "./style";

const Label = observer(({ placeholder, from, before, isOpen }) => (
  <S.LabelRow>
    <S.LabelText>
      {from && before ? `${from} - ${before}` : placeholder}
    </S.LabelText>

    <S.LabelIconRow isOpen={isOpen}>
      <S.LabelIcon>
        <path d="M9.67861 1.8337L5.77064 5.68539C5.34503 6.10487 4.65497 6.10487 4.22936 5.68539L0.321394 1.8337C-0.365172 1.15702 0.121082 -8.3659e-08 1.09203 0L8.90797 6.73452e-07C9.87892 7.57113e-07 10.3652 1.15702 9.67861 1.8337Z" />
      </S.LabelIcon>
    </S.LabelIconRow>
  </S.LabelRow>
));

Label.propTypes = {
  placeholder: PropTypes.string,
  from: PropTypes.number,
  before: PropTypes.number,
  isOpen: PropTypes.bool,
};

export default Label;
