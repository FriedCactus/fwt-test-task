import React, { useContext, useRef } from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react-lite";
import { GalleryContext } from "../../context";

import * as S from "./style";
import useClickOutside from "../../hooks/useClickOutside";

const Years = observer(({ placeholder, filter, isOpen }) => {
  const store = useContext(GalleryContext);

  //Закрытие по клику снаружи
  const ref = useRef(null);
  useClickOutside(ref, () => {
    store.setIsActiveFilter(filter, false);
  });

  //Отмена бабблинга
  const stopPropaganation = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  const handleClick = () => {
    store.setIsActiveFilter(filter, !isOpen);
  };

  const handleChange = (e, field) => {
    const value = { ...store.filters[filter].value, [field]: e.target.value };
    store.setFilters(filter, value);
  };

  return (
    <S.SelectRow ref={ref} isOpen={isOpen} onClick={() => handleClick()}>
      <S.LabelRow>
        <S.LabelText>{placeholder}</S.LabelText>
        <S.LabelIconRow isOpen={isOpen}>
          <S.LabelIcon>
            <path d="M9.67861 1.8337L5.77064 5.68539C5.34503 6.10487 4.65497 6.10487 4.22936 5.68539L0.321394 1.8337C-0.365172 1.15702 0.121082 -8.3659e-08 1.09203 0L8.90797 6.73452e-07C9.87892 7.57113e-07 10.3652 1.15702 9.67861 1.8337Z" />
          </S.LabelIcon>
        </S.LabelIconRow>
      </S.LabelRow>

      {isOpen && (
        <S.YearsMenu isOpen={isOpen} onClick={stopPropaganation}>
          <S.YearsInputRow>
            <S.YearsInput
              placeholder="from"
              value={store.filters[filter].value.from}
              onChange={(e) => handleChange(e, "from")}
            />
          </S.YearsInputRow>
          <S.YearsMenuDash />
          <S.YearsInputRow>
            <S.YearsInput
              placeholder="before"
              value={store.filters[filter].value.before}
              onChange={(e) => handleChange(e, "before")}
            />
          </S.YearsInputRow>
        </S.YearsMenu>
      )}
    </S.SelectRow>
  );
});

Years.propTypes = {
  placeholder: PropTypes.string,
  filter: PropTypes.string,
  isOpen: PropTypes.bool,
};

export default Years;
