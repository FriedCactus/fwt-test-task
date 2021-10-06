import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { GalleryContext } from "../../context";

import { BASE_URL } from "../../utils/api";

import Label from "./Label";
import * as S from "./style";

const Gallery = observer(() => {
  const store = useContext(GalleryContext);
  const { page } = useParams();

  useEffect(() => {
    //Установка страницы из адресной строки при несовпадении
    if (page && store.page != page) {
      store.setPage(Number(page));
    }

    //Первичная инициализация
    store.getPaintingsOnPage();
    store.getPagesCount();
    store.getPaintings();
  }, [store]);

  //Поиск поля значения по его id(для поиска места и автора)
  const findFieldById = (field, id) => {
    return store.filters[field].data.find((item) => item.id === id);
  };

  return (
    <S.GalleryRow>
      <S.GalleryContainer>
        {store.paintings &&
          store.paintings.map((item, index) => (
            <S.ImageRow key={item.id}>
              <S.ImageLink
                href={BASE_URL + item.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.Image
                  src={BASE_URL + item.imageUrl}
                  alt={`image-${index}`}
                />
              </S.ImageLink>
              <S.ImageLabelRow>
                <S.ImageTitle>{item.name}</S.ImageTitle>

                <Label
                  title="Author:"
                  text={findFieldById("author", item.authorId).name}
                />
                <Label title="Created:" text={item.created} />
                <Label
                  title="Location:"
                  text={findFieldById("location", item.locationId).location}
                />
              </S.ImageLabelRow>
            </S.ImageRow>
          ))}
      </S.GalleryContainer>
    </S.GalleryRow>
  );
});

export default Gallery;
