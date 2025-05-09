import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.20.10.4:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;


