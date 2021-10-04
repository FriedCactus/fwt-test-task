import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { GalleryContext } from "../../context";
import * as S from "./style";

const Gallery = observer(() => {
  const store = useContext(GalleryContext);
  const API = "https://test-front.framework.team";

  useEffect(() => {
    store.getPaintingsOnPage();
    store.getPaintings();
  }, [store]);

  //Поиск поля по его id(автор и место)
  const findFieldById = (field, id) => {
    return store.filters[field].data.find((item) => item.id === id);
  };

  return (
    <S.GalleryRow>
      <S.GalleryContainer>
        {store.paintings &&
          store.paintings.map((item) => (
            <S.ImageRow key={item.id}>
              <S.Image src={API + item.imageUrl} />
              <S.ImageDesc>
                <S.ImageTitle>{item.name}</S.ImageTitle>

                <S.DescRow>
                  <S.DescTitle>Author:</S.DescTitle>
                  <S.DescText>Rembrandt</S.DescText>
                </S.DescRow>
                <S.DescRow>
                  <S.DescTitle>Created:</S.DescTitle>
                  <S.DescText>
                    {findFieldById("author", item.authorId).name}
                  </S.DescText>
                </S.DescRow>
                <S.DescRow>
                  <S.DescTitle>Location:</S.DescTitle>
                  <S.DescText>
                    {" "}
                    {findFieldById("location", item.locationId).location}
                  </S.DescText>
                </S.DescRow>
              </S.ImageDesc>
            </S.ImageRow>
          ))}
      </S.GalleryContainer>
    </S.GalleryRow>
  );
});

export default Gallery;
