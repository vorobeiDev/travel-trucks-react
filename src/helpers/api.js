import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://67138ebf6c5f5ced6626d6bf.mockapi.io',
});

export default axiosInstance;
