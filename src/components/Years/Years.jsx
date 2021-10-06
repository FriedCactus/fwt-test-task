import React, { useContext, useRef, useState } from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";

import { GalleryContext } from "../../context";

import Label from "./Label";
import * as S from "./style";
import useClickOutside from "../../hooks/useClickOutside";

const Years = observer(({ placeholder, from, before }) => {
  const [isOpen, setIsOpen] = useState(false);

  const store = useContext(GalleryContext);
  const history = useHistory();
  const ref = useRef(null);

  //Закрытие по клику снаружи
  useClickOutside(ref, () => {
    setIsOpen(false);
  });

  //Отмена бабблинга
  const stopPropaganation = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e, filter) => {
    store.setFilters(filter, e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key !== "Enter") return;

    history.push("/page=1");
    setIsOpen(false);

    store.fullGalleryUpdate();
  };

  return (
    <S.SelectRow ref={ref} isOpen={isOpen} onClick={() => handleClick()}>
      <Label
        placeholder={placeholder}
        from={Number(store.filters[from].value)}
        before={Number(store.filters[before].value)}
        isOpen={isOpen}
      />

      {isOpen && (
        <S.YearsMenu onClick={stopPropaganation}>
          <S.YearsInputRow>
            <S.YearsInput
              placeholder="from"
              value={store.filters[from].value}
              onChange={(e) => handleChange(e, "from")}
              onKeyPress={(e) => handleKeyPress(e)}
            />
          </S.YearsInputRow>

          <S.YearsMenuDash />

          <S.YearsInputRow>
            <S.YearsInput
              placeholder="before"
              value={store.filters[before].value}
              onChange={(e) => handleChange(e, "before")}
              onKeyPress={(e) => handleKeyPress(e)}
            />
          </S.YearsInputRow>
        </S.YearsMenu>
      )}
    </S.SelectRow>
  );
});

Years.propTypes = {
  placeholder: PropTypes.string,
  from: PropTypes.string,
  before: PropTypes.string,
};

export default Years;
