import React from "react";
import SelectLabel from "./SelectLabel";
import * as S from "./style";

const SelectList = ({ placeholder }) => {
  return (
    <S.SelectRow>
      <SelectLabel placeholder={placeholder} />
    </S.SelectRow>
  );
};

export default SelectList;
