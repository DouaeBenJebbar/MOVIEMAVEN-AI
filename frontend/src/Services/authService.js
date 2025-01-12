// authService.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api/auth'; // Adjust the URL as needed

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

export const register = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/signup`, { username: name, email, password });
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};