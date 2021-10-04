import { makeAutoObservable, toJS } from "mobx";
import * as api from "../utils/api";

class GalleryStore {
  //Цвет темы
  theme = "light";
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

  //Количество картин на странице
  picturesOnPage = "";

  constructor() {
    makeAutoObservable(this);
  }

  //Сеттеры

  //Установка темы
  setTheme(value) {
    this.theme = value;
  }

  //Установка количества картин на странице
  setPicturesOnPage(number) {
    this.picturesOnPage = number;
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
  getPicturesOnPage() {
    const windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      this.setPicturesOnPage(6);
    } else if (windowWidth >= 768 && windowWidth < 1024) {
      this.setPicturesOnPage(8);
    } else {
      this.setPicturesOnPage(9);
    }
  }

  //Получение элементов списка авторов(author)
  async getAuthors() {
    const authors = await api.fetchAuthors();
    this.setFiltersData("author", authors);

    console.log(toJS(this.filters.author.data));
  }

  //Получение элементов списка мест(location)
  async getLocations() {
    const locations = await api.fetchLocations();
    this.setFiltersData("location", locations);

    console.log(toJS(this.filters.location.data));
  }
}

export default GalleryStore;
