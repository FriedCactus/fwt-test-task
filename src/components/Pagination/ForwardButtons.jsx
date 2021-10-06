import React, { useContext } from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import { observer } from "mobx-react-lite";
import { GalleryContext } from "../../context";

const ForwardButtons = observer(({ changePage }) => {
  const store = useContext(GalleryContext);

  return (
    <>
      <S.ArrowButton
        disabled={store.page === store.pagesCount}
        onClick={(e) => changePage(e, store.page + 1)}
        to={"/page=" + (store.page + 1)}
      >
        <S.ArrowButtonIcon>
          <path d="M8.06716 7.13428L2.26841 12.6433C1.89954 12.9939 1.30148 12.9939 0.932791 12.6433C0.56407 12.293 0.56407 11.7248 0.932791 11.3745L6.06379 6.49991L0.93294 1.62545C0.564219 1.275 0.564219 0.706895 0.93294 0.356587C1.30166 0.00613754 1.89969 0.00613754 2.26856 0.356587L8.06731 5.86567C8.25167 6.04091 8.34375 6.27034 8.34375 6.49988C8.34375 6.72953 8.25149 6.95913 8.06716 7.13428Z" />
        </S.ArrowButtonIcon>
      </S.ArrowButton>
      <S.ArrowButton
        disabled={store.page === store.pagesCount}
        onClick={(e) => changePage(e, store.pagesCount)}
        to={"/page=" + store.pagesCount}
      >
        <S.DoubleArrowButtonIcon>
          <path d="M11.286 6.49988L6.19769 1.62545C5.83203 1.275 5.83203 0.706895 6.19769 0.356587C6.56335 0.00613754 7.15632 0.00613754 7.52213 0.356587L13.2727 5.86567C13.4556 6.04091 13.5469 6.27034 13.5469 6.49988C13.5469 6.72951 13.4554 6.9591 13.2727 7.13426L7.52213 12.6433C7.15632 12.9939 6.56332 12.9939 6.19769 12.6433C5.83203 12.293 5.83203 11.7248 6.19769 11.3745L11.286 6.49988ZM0.367995 11.3745C0.00233503 11.7248 0.00233503 12.293 0.367995 12.6433C0.733655 12.9939 1.32645 12.9939 1.69247 12.6433L7.44307 7.13428C7.6259 6.95913 7.71707 6.72953 7.71707 6.49991C7.71707 6.27037 7.62573 6.04077 7.44307 5.8657L1.69247 0.356587C1.32648 0.00613754 0.733655 0.00613754 0.367995 0.356587C0.00233503 0.706895 0.00233503 1.27498 0.367995 1.62545L5.45642 6.49988L0.367995 11.3745Z" />
        </S.DoubleArrowButtonIcon>
      </S.ArrowButton>
    </>
  );
});

ForwardButtons.propTypes = {
  changePage: PropTypes.func,
};

export default ForwardButtons;
