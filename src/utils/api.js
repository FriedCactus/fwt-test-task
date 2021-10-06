export const BASE_URL = "https://test-front.framework.team";

export const fetchAuthors = async () => {
  const data = await fetch(`${BASE_URL}/authors`);

  return await data.json();
};

export const fetchLocations = async () => {
  const data = await fetch(`${BASE_URL}/locations`);

  return await data.json();
};

export const fetchPaintings = async (
  page,
  perPage,
  search,
  author,
  location
) => {
  let filterString = "";
  if (page) {
    filterString += `_page=${page}`;
  }

  if (perPage) {
    filterString += `&_limit=${perPage}`;
  }

  if (search) {
    filterString += `&q=${search}`;
  }

  if (author) {
    filterString += `&authorId=${author}`;
  }

  if (location) {
    filterString += `&locationId=${location}`;
  }

  const data = await fetch(`${BASE_URL}/paintings?${filterString}`);

  return await data.json();
};
