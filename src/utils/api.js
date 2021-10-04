export const fetchAuthors = async () => {
  const data = await fetch("https://test-front.framework.team/authors");

  return await data.json();
};

export const fetchLocations = async () => {
  const data = await fetch("https://test-front.framework.team/locations");

  return await data.json();
};

export const fetchPaintings = async (page, perPage) => {
  let filterString = "";
  if (page) {
    filterString += `_page=${page}`;
  }

  if (perPage) {
    filterString += `&_limit=${perPage}`;
  }

  const data = await fetch(
    `https://test-front.framework.team/paintings?${filterString}`
  );

  return await data.json();
};
