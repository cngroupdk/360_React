import Axios from 'axios';
import {
  BASE_URL,
} from './appConfig';

export const api = Axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const apiPost = Axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'text/plain',
  },
  withCredentials: true,
});

