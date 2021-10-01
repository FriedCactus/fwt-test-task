import React from "react";
import SelectLabel from "./SelectLabel";
import * as S from "./style";

const SelectYears = ({ placeholder, isOpen }) => {
  return (
    <S.SelectRow>
      <SelectLabel isOpen={isOpen} placeholder={placeholder} />

      {isOpen && (
        <S.YearsMenu>
          <S.YearsInputRow>
            <S.YearsInput placeholder="from" />
          </S.YearsInputRow>
          <S.YearsMenuDash />
          <S.YearsInputRow>
            <S.YearsInput placeholder="before" />
          </S.YearsInputRow>
        </S.YearsMenu>
      )}
    </S.SelectRow>
  );
};

export default SelectYears;
