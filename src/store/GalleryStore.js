import { makeAutoObservable, runInAction } from "mobx";

import usePaginationSlice from "../hooks/usePagintaionSlice";

import * as api from "../utils/api";

class GalleryStore {
  constructor() {
    makeAutoObservable(this);
  }

  ////////////////////////Переменные////////////////////////
  //Цвет темы
  theme = "light";

  //Картины
  paintings = [];

  //Фильтры
  filters = {
    name: {
      querry: "q",
      value: "",
    },
    author: {
      querry: "authorId",
      data: [],
      value: "",
    },
    location: {
      querry: "&locationId",
      data: [],
      value: "",
    },
    from: {
      querry: "&created_gte",
      value: "",
    },
    before: {
      querry: "&created_lte",
      value: "",
    },
  };

  //Активная страница галлереи
  page = 1;
  //Количество картин на странице
  paintingsOnPage = 0;
  //Общее количество страниц
  pagesCount = 0;
  //Страницы для вывода в пагинации
  slicedPages = [];

  ////////////////////////Сеттеры////////////////////////
  //Установка темы
  setTheme(value) {
    this.theme = value;
  }

  //Установка картин
  setPaintings(data) {
    this.paintings = data;
  }

  //Установка активной страницы
  setPage(number) {
    this.page = number;
  }

  //Установка количества картин на странице
  setPaintingsOnPage(number) {
    this.paintingsOnPage = number;
  }

  //Установка общего количества страниц
  setPagesCount(number) {
    this.pagesCount = number;
  }

  //Установка страниц для пагинации
  setSlicedPages(arr) {
    this.slicedPages = arr;
  }

  //Установка значения фильтра
  setFilters(filter, value) {
    this.filters[filter].value = value;
  }

  //Установка элементов списка фильтрации
  setFiltersData(filter, data) {
    this.filters[filter].data = data;
  }

  //Установка состояния списка фильтра
  setIsActiveFilter(filter, value) {
    this.filters[filter].isOpen = value;
  }

  ////////////////////////Методы////////////////////////
  //Получение количества картин на странице в зависимости от размера экрана
  getPaintingsOnPage() {
    const windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      runInAction(() => {
        this.setPaintingsOnPage(6);
      });
    } else if (windowWidth >= 768 && windowWidth < 1024) {
      runInAction(() => {
        this.setPaintingsOnPage(8);
      });
    } else {
      runInAction(() => {
        this.setPaintingsOnPage(9);
      });
    }
  }

  //Получение элементов списка авторов
  async getAuthors() {
    const authors = await api.fetchAuthors();

    this.setFiltersData("author", authors);
  }

  //Получение элементов списка мест
  async getLocations() {
    const locations = await api.fetchLocations();

    runInAction(() => {
      this.setFiltersData("location", locations);
    });
  }

  //Получение общего количества страниц
  async getPagesCount() {
    const data = await api.fetchPaintings("", "", this.filters);
    const pagesCount = Math.ceil(data.length / this.paintingsOnPage);

    runInAction(() => {
      this.setPagesCount(pagesCount);
    });
  }

  //Получение списка картин
  async getPaintings() {
    const paintings = await api.fetchPaintings(
      this.page,
      this.paintingsOnPage,
      this.filters
    );

    runInAction(() => {
      this.setPaintings(paintings);
    });
  }

  //Полное обновление галлереи картин
  async fullGalleryUpdate() {
    this.setPage(1);

    await this.getPagesCount();
    await this.getPaintings();

    runInAction(() => {
      this.setSlicedPages(usePaginationSlice(this.page, this.pagesCount));
    });
  }
}

export default GalleryStore;
