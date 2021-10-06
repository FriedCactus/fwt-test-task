import React, { useContext, useEffect } from "react";
import usePaginationSlice from "../../hooks/usePagintaionSlice";
import { observer } from "mobx-react-lite";

import BackButtons from "./BackButtons";
import ForwardButtons from "./ForwardButtons";
import { Container } from "../Container";

import * as S from "./style";

import { GalleryContext } from "../../context";
import { useLocation } from "react-router-dom";

const Pagination = observer(() => {
  const store = useContext(GalleryContext);
  const location = useLocation();

  useEffect(() => {
    //Первичная инициализация массива страниц
    store.setSlicedPages(usePaginationSlice(store.page, store.pagesCount));
  }, [store]);

  const handleClick = (e, page) => {
    if (page === store.page || page <= 0 || page > store.pagesCount) {
      e.preventDefault();
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    store.setPage(page);
    store.setSlicedPages(usePaginationSlice(store.page, store.pagesCount));

    store.getPaintings();
  };

  const getPageNumber = () => {
    return Number(new URLSearchParams(location.search).get("page"));
  };

  return (
    <Container>
      <S.Pagination>
        <BackButtons changePage={(e, page) => handleClick(e, page)} />

        {store.slicedPages.map((item, index) => (
          <S.NumberButton
            key={index}
            onClick={(e) => handleClick(e, item)}
            to={"/fwt-test-task?page=" + item}
            activeClassName="active"
            isActive={() => {
              const page = getPageNumber();

              return (item === 1 && !page) || item === page;
            }}
          >
            {item}
          </S.NumberButton>
        ))}

        <ForwardButtons changePage={(e, page) => handleClick(e, page)} />
      </S.Pagination>
    </Container>
  );
});

export default Pagination;
