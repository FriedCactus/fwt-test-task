import React from "react";
import * as S from "./style";

const Gallery = () => (
  <S.GalleryRow>
    <S.GalleryContainer>
      {[...Array(9)].map((item, index) => (
        <S.ImageRow key={index}>
          <S.Image src="/images/painting.png" />
          <S.ImageDesc>
            <S.ImageTitle>The Night Watch</S.ImageTitle>

            <S.DescRow>
              <S.DescTitle>Author:</S.DescTitle>
              <S.DescText>Rembrandt</S.DescText>
            </S.DescRow>
            <S.DescRow>
              <S.DescTitle>Created:</S.DescTitle>
              <S.DescText>1642</S.DescText>
            </S.DescRow>
            <S.DescRow>
              <S.DescTitle>Location:</S.DescTitle>
              <S.DescText>The Rijksmuseum</S.DescText>
            </S.DescRow>
          </S.ImageDesc>
        </S.ImageRow>
      ))}
    </S.GalleryContainer>
  </S.GalleryRow>
);

export default Gallery;
