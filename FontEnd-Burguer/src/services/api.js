import axios from 'axios';
import { useActionData } from 'react-router-dom';

export const api = axios.create({
  baseURL: 'http://localhost:3001',
});

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem('devburguer:userData');

  if (userData) {
    const { token } = JSON.parse(userData);
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});
