import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "832899de30f8b1f1a8444e489ec1d9db";

const movieByGenreBaseURL = `${movieBaseUrl}/discover/movie?api_key=${api_key}`;

const getTrendingVideos = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);

const getMovieByGenreId = (id) =>
  axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);

const getMovieDetails = (movieId) =>
  axios.get(`${movieBaseUrl}/movie/${movieId}?api_key=${api_key}`);

const searchMovies = (query) =>
  axios.get(`${movieBaseUrl}/search/movie?api_key=${api_key}&query=${query}`);

export default {
  getTrendingVideos,
  getMovieByGenreId,
  getMovieDetails,
  searchMovies,
};
