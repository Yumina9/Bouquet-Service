import axios from 'axios';

const host = 'http://20.194.3.133/';

const apiClient = axios.create({
  baseURL: host,
});

export default apiClient;
