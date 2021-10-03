import React from "react";
import { Container } from "../Container";
import { Input } from "../Input";
import { Select } from "../Select";
import { Years } from "../Years";
import * as S from "./style";

const Filters = () => {
  return (
    <S.FiltersRow>
      <Container>
        <Input placeholder="Name" />
        <Select placeholder="Author" isOpen={false} />
        <Select placeholder="Location" isOpen={false} />
        <Years placeholder="Created" isOpen={false} />
      </Container>
    </S.FiltersRow>
  );
};

export default Filters;
