import React, { useContext } from "react";
import PropTypes from "prop-types";

import { observer } from "mobx-react-lite";
import { useHistory } from "react-router";
import { GalleryContext } from "../../context";

import * as S from "./style";

const Input = observer(({ placeholder, filter, value }) => {
  const store = useContext(GalleryContext);
  const history = useHistory();

  const handleChange = (e) => {
    store.setFilters(filter, e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key !== "Enter") return;

    history.push("/fwt-test-task/page=1");
    store.fullGalleryUpdate();
  };

  return (
    <S.InputRow>
      <S.Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
        onKeyPress={(e) => handleKeyPress(e)}
      />
    </S.InputRow>
  );
});

Input.propTypes = {
  placeholder: PropTypes.string,
  filter: PropTypes.string,
  value: PropTypes.string,
};

export default Input;
