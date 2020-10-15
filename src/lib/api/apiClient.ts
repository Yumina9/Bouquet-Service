import axios from 'axios';

const host = 'http://localhost:8000';

const apiClient = axios.create({
  baseURL: host,
});

export default apiClient;
