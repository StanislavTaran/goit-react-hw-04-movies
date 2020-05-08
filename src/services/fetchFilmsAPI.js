/* eslint-disable max-len */
import axios from 'axios';

const API_KEY = 'ce2e53f2d43a7725e8e24d3e43439afb';
const BASE_URL = `https://api.themoviedb.org/3`;

export const fetchTrendingFilms = () => {
  return axios
    .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    .then(response => response.data);
};

export const fetchQueryFilms = query => {
  return axios
    .get(
      `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
    )
    .then(response => response.data);
};

export const fetchFilmsWithId = id => {
  return axios
    .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
};

export const fetchActors = id => {
  return axios
    .get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
    .then(response => response.data);
};

export const fetchReviews = id => {
  return axios
    .get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    )
    .then(response => response.data);
};
