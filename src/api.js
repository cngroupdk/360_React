import Axios from 'axios';
import {
  BASE_URL,
} from './appConfig';

export const api = Axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
