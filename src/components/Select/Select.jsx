import React, { useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react-lite";
import { GalleryContext } from "../../context";

import SimpleBar from "simplebar-react";
import "./Simplebar.css";

import * as S from "./style";
import useClickOutside from "../../hooks/useClickOutside";

const Select = observer(({ placeholder, filter, options, getFunc, isOpen }) => {
  const store = useContext(GalleryContext);
  useEffect(() => {
    getFunc();
  }, [store]);

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

  const handleRowClick = () => {
    store.setIsActiveFilter(filter, !isOpen);
  };

  const handleListClick = (value) => {
    store.setFilters(filter, value);
    store.setIsActiveFilter(filter, false);
  };

  return (
    <S.SelectRow ref={ref} isOpen={isOpen} onClick={() => handleRowClick()}>
      <S.LabelRow>
        <S.LabelText>{store.filters[filter].value || placeholder}</S.LabelText>
        <S.LabelIconRow isOpen={isOpen}>
          <S.LabelIcon>
            <path d="M9.67861 1.8337L5.77064 5.68539C5.34503 6.10487 4.65497 6.10487 4.22936 5.68539L0.321394 1.8337C-0.365172 1.15702 0.121082 -8.3659e-08 1.09203 0L8.90797 6.73452e-07C9.87892 7.57113e-07 10.3652 1.15702 9.67861 1.8337Z" />
          </S.LabelIcon>
        </S.LabelIconRow>
      </S.LabelRow>

      {isOpen && store.filters[filter].data && (
        <S.List onClick={stopPropaganation}>
          <SimpleBar style={{ maxHeight: "inherit", padding: "10px 0" }}>
            {store.filters[filter].data.map((item) => (
              <S.ListItem
                key={item.id}
                onClick={() => handleListClick(item[options])}
              >
                <S.ListText>{item[options]}</S.ListText>
              </S.ListItem>
            ))}
          </SimpleBar>
        </S.List>
      )}
    </S.SelectRow>
  );
});

Select.propTypes = {
  placeholder: PropTypes.string,
  filter: PropTypes.string,
  options: PropTypes.string,
  getFunc: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default Select;

/*

              <S.ListItem key={i}>{i}</S.ListItem>

*/
