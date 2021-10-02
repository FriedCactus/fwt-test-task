import React from "react";
import * as S from "./style";
import SimpleBar from "simplebar-react";
import "./Simplebar.css";

const Select = ({ placeholder, isOpen }) => {
  return (
    <S.SelectRow isOpen={isOpen}>
      <S.LabelRow>
        <S.LabelText>{placeholder}</S.LabelText>
        <S.LabelIconRow isOpen={isOpen}>
          <S.LabelIcon>
            <path d="M9.67861 1.8337L5.77064 5.68539C5.34503 6.10487 4.65497 6.10487 4.22936 5.68539L0.321394 1.8337C-0.365172 1.15702 0.121082 -8.3659e-08 1.09203 0L8.90797 6.73452e-07C9.87892 7.57113e-07 10.3652 1.15702 9.67861 1.8337Z" />
          </S.LabelIcon>
        </S.LabelIconRow>
      </S.LabelRow>

      {isOpen && (
        <S.List>
          <SimpleBar style={{ maxHeight: "inherit", padding: "10px 0" }}>
            {[...Array(50)].map((item, i) => (
              <S.ListItem key={i}>{i}</S.ListItem>
            ))}
          </SimpleBar>
        </S.List>
      )}
    </S.SelectRow>
  );
};

export default Select;
