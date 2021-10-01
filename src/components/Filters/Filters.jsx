import React from "react";
import { Container } from "../Container";
import { FiltersInput } from "../FiltersInput";
import { SelectList, SelectYears } from "../FiltersSelect";
import * as S from "./style";

const FiltersSection = () => {
  return (
    <Container>
      <S.ElementRow>
        <FiltersInput placeholder="Name" />
      </S.ElementRow>
      <S.ElementRow>
        <SelectList placeholder="Author" />
      </S.ElementRow>
      <S.ElementRow>
        <SelectList placeholder="Location" />
      </S.ElementRow>
      <S.ElementRow>
        <SelectYears isOpen={true} placeholder="Created" />
      </S.ElementRow>
    </Container>
  );
};

export default FiltersSection;
