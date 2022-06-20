const BASE_API = 'www.thecocktaildb.com/api/json/v1/1';

export const fetchDrinkById = async (id) => {
  const URL = `${BASE_API}/lookup.php?i=${id}`;
  const response = await fetch(URL);
  const data = response.json();
  return data;
};

export const fetchDrinkByName = async (name) => {
  const URL = `${BASE_API}/search.php?s=${name}`;
  const response = await fetch(URL);
  const data = response.json();
  return data;
};

export const fetchDrinksbyFirstLetter = async (letter) => {
  const URL = `${BASE_API}/search.php?f=${letter}`;
  const response = await fetch(URL);
  const data = response.json();
  return data;
};

export const fetchDrinksByIngredient = async (ingredient) => {
  const URL = `${BASE_API}/filter.php?i=${ingredient}`;
  const response = await fetch(URL);
  const data = response.json();
  return data;
};

export const fetchDrinksByCategory = async (category) => {
  const URL = `${BASE_API}/filter.php?c=${category}`;
  const response = await fetch(URL);
  const data = response.json();
  return data;
};

export const fetchDrinksByArea = async (area) => {
  const URL = `${BASE_API}/filter.php?a=${area}`;
  const response = await fetch(URL);
  const data = response.json();
  return data;
};

export const fetchRandomDrink = async () => {
  const URL = `${BASE_API}/random.php`;
  const response = await fetch(URL);
  const data = response.json();
  return data;
};
