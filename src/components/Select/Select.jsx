import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react-lite";
import { GalleryContext } from "../../context";
import { useHistory } from "react-router-dom";

import Label from "./Label";
import SimpleBar from "simplebar-react";
import "./Simplebar.css";

import * as S from "./style";
import useClickOutside from "../../hooks/useClickOutside";

const Select = observer(({ placeholder, filter, options, getFunc }) => {
  const [label, setLabel] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const store = useContext(GalleryContext);
  const history = useHistory();
  const ref = useRef(null);

  useEffect(() => {
    //Получение элементов списка
    getFunc();
  }, [store]);

  //Закрытие по клику снаружи
  useClickOutside(ref, () => {
    setIsOpen(false);
  });

  //Отмена бабблинга
  const stopPropaganation = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  const handleRowClick = () => {
    setIsOpen(!isOpen);
  };

  const handleListClick = (value, option) => {
    history.push("/fwt-test-task");

    setLabel(option);

    store.setFilters(filter, value);
    setIsOpen(false);

    store.fullGalleryUpdate();
  };

  return (
    <S.SelectRow ref={ref} isOpen={isOpen} onClick={() => handleRowClick()}>
      <Label label={label} placeholder={placeholder} isOpen={isOpen} />

      {isOpen && store.filters[filter].data && (
        <S.List onClick={stopPropaganation}>
          <SimpleBar style={{ maxHeight: "inherit", padding: "10px 0" }}>
            {store.filters[filter].data.map((item) => (
              <S.ListItem
                key={item.id}
                onClick={() => handleListClick(item.id, item[options])}
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
  //Функция получения элементов списка
  getFunc: PropTypes.func,
};

export default Select;
