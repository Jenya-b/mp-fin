import axios from 'axios';
import { baseUrl } from './baseUrl';

export default axios.create({
  baseURL: baseUrl,
  headers: {
    'content-type': 'multipart/form-data',
  },
  withCredentials: true,
});
