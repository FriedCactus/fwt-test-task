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
    store.setFilters("name", e.target.value);
  };

  const handleFocus = () => {
    store.setIsActiveFilter(filter, true);
  };

  const handleKeyPress = (e) => {
    if (e.key !== "Enter") return;

    history.push("/page=1");
    store.fullGalleryUpdate();
  };

  return (
    <S.InputRow>
      <S.Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
        onFocus={() => handleFocus()}
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
