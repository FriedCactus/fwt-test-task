import React, { useContext } from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react-lite";
import { GalleryContext } from "../../context";
import * as S from "./style";

const Input = observer(({ placeholder, filter, value }) => {
  const store = useContext(GalleryContext);

  const handleChange = (e) => {
    store.setFilters("name", e.target.value);
  };

  const handleFocus = () => {
    store.setIsActiveFilter(filter, true);
  };

  const handleBlur = () => {
    store.setIsActiveFilter(filter, false);
  };

  return (
    <S.InputRow>
      <S.Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
        onFocus={() => handleFocus()}
        onBlur={() => handleBlur()}
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
