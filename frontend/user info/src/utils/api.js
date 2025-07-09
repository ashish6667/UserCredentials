import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // ⬅️ Add this if you're using cookies or auth tokens
});

export default API;
