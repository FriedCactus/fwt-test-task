import { toJS } from "mobx";

export const BASE_URL = "https://test-front.framework.team";

export const fetchAuthors = async () => {
  try {
    const data = await fetch(`${BASE_URL}/authors`);
    return await data.json();
  } catch (e) {
    alert("Произошла ошибка при загрузке списка авторов");
  }
};

export const fetchLocations = async () => {
  try {
    const data = await fetch(`${BASE_URL}/locations`);
    return await data.json();
  } catch (e) {
    alert("Произошла ошибка при загрузке списка мест");
  }
};

export const fetchPaintings = async (page, perPage, ...filters) => {
  let filterString = "";

  let filtersObj = filters[0];
  let filtersKeys;

  if (page) {
    filterString += `_page=${page}`;
  }

  if (perPage) {
    filterString += `&_limit=${perPage}`;
  }

  if (filters.length) {
    filtersKeys = Object.keys(filtersObj);

    filtersKeys.forEach((key) => {
      if (filtersObj[key].value && filtersObj[key].querry) {
        filterString += `&${filtersObj[key].querry}=${filtersObj[key].value}`;
      }
    });
  }

  try {
    const data = await fetch(`${BASE_URL}/paintings?${filterString}`);

    return await data.json();
  } catch (e) {
    alert("Произошла ошибка при загрузке галлереи");
  }
};
