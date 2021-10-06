import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { GalleryContext } from "../../context";
import { Container } from "../Container";
import { Input } from "../Input";
import { Select } from "../Select";
import { Years } from "../Years";
import * as S from "./style";

const Filters = observer(() => {
  const store = useContext(GalleryContext);

  return (
    <S.Filters>
      <Container>
        <Input
          placeholder="Name"
          filter="name"
          value={store.filters.name.value}
        />
        <Select
          placeholder="Author"
          filter="author"
          options="name"
          getFunc={() => store.getAuthors()}
        />
        <Select
          placeholder="Location"
          filter="location"
          options="location"
          getFunc={() => store.getLocations()}
        />
        <Years placeholder="Created" from="from" before="before" />
      </Container>
    </S.Filters>
  );
});

export default Filters;
