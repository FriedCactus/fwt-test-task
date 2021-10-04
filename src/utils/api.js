export const fetchAuthors = async () => {
  const data = await fetch("https://test-front.framework.team/authors");

  return await data.json();
};

export const fetchLocations = async () => {
  const data = await fetch("https://test-front.framework.team/locations");

  return await data.json();
};
