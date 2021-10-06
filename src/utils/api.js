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

export const fetchPaintings = async (page, perPage, filters) => {
  let filterString = "";

  if (page) {
    filterString += `_page=${page}`;
  }

  if (perPage) {
    filterString += `&_limit=${perPage}`;
  }

  Object.keys(filters).forEach((key) => {
    if (filters[key].querry && filters[key].value) {
      filterString += `&${filters[key].querry}=${filters[key].value}`;
    }
  });

  try {
    const data = await fetch(`${BASE_URL}/paintings?${filterString}`);

    return await data.json();
  } catch (e) {
    alert("Произошла ошибка при загрузке галлереи");
  }
};
