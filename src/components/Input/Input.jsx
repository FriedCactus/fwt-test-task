import React, { useContext } from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react-lite";
import { GalleryContext } from "../../context";
import * as S from "./style";
import usePaginationSlice from "../../hooks/usePagintaionSlice";
import { useHistory } from "react-router";

const Input = observer(({ placeholder, filter, value }) => {
  const store = useContext(GalleryContext);
  const history = useHistory();

  const updateGallery = async () => {
    await store.getPagesCount();
    store.setPage(1);
    store.setSlicedPages(usePaginationSlice(store.page, store.pagesCount));
    store.getPaintings();

    history.push("/");
  };

  const handleChange = (e) => {
    store.setFilters("name", e.target.value);
  };

  const handleFocus = () => {
    store.setIsActiveFilter(filter, true);
  };

  const handleBlur = () => {
    if (!store.filters[filter].isOpen) return;

    store.setIsActiveFilter(filter, false);

    updateGallery();
  };

  const handleKeyPress = (e) => {
    if (e.key !== "Enter") return;

    store.setIsActiveFilter(filter, false);

    updateGallery();
  };

  return (
    <S.InputRow>
      <S.Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
        onFocus={() => handleFocus()}
        onBlur={() => handleBlur()}
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
