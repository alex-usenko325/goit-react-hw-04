const API_KEY = 'C-vl2DTJ7FcSRPkK5XwKq0oB76utC7TDkmPMD5wSP_w';
const BASE_URL = 'https://api.unsplash.com';

export const fetchImages = async (query, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/search/photos?query=${query}&page=${page}&client_id=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }

  const data = await response.json();
  return data.results;
};

