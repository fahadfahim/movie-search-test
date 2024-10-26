// lib/tmdbApi.js
import axios from 'axios';

const API_BASE_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = process.env.NEXT_PUBLIC_APP_API_KEY; // Store your API key in .env.local

export const fetchMovieDetails = (movieId) =>
    axios.get(`${API_BASE_URL}/${movieId}`, { params: { api_key: API_KEY } });

export const fetchMovieCredits = (movieId) =>
    axios.get(`${API_BASE_URL}/${movieId}/credits`, { params: { api_key: API_KEY } });

export const fetchMovieRecommendations = (movieId) =>
    axios.get(`${API_BASE_URL}/${movieId}/recommendations`, { params: { api_key: API_KEY } });
