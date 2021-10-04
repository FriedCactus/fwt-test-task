import { makeAutoObservable } from "mobx";
import * as api from "../utils/api";

class GalleryStore {
  //Цвет темы
  theme = "light";

  //Картины
  paintings = [];

  //Фильтры
  filters = {
    name: {
      isOpen: false,
      value: "",
    },
    author: {
      isOpen: false,
      data: [],
      value: "",
    },
    location: {
      isOpen: false,
      data: [],
      value: "",
    },
    created: {
      isOpen: false,
      value: {
        from: "",
        before: "",
      },
    },
  };

  //Активная страница галлереи
  page = 1;
  //Количество картин на странице
  paintingsOnPage = "";
  //Общее количество страниц
  pagesCount = "";

  constructor() {
    makeAutoObservable(this);
  }

  //Сеттеры

  //Установка темы
  setTheme(value) {
    this.theme = value;
  }

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

  setPagesCount(number) {
    this.pagesCount = number;
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

  //Получение количества картин на странице
  getPaintingsOnPage() {
    const windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      this.setPaintingsOnPage(6);
    } else if (windowWidth >= 768 && windowWidth < 1024) {
      this.setPaintingsOnPage(8);
    } else {
      this.setPaintingsOnPage(9);
    }
  }

  //Получение элементов списка авторов(author)
  async getAuthors() {
    const authors = await api.fetchAuthors();
    this.setFiltersData("author", authors);
  }

  //Получение элементов списка мест(location)
  async getLocations() {
    const locations = await api.fetchLocations();
    this.setFiltersData("location", locations);
  }

  //Получение списка картин
  async getPaintings() {
    const paintings = await api.fetchPaintings(this.page, this.paintingsOnPage);
    this.setPaintings(paintings);
  }
}

export default GalleryStore;
