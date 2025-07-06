// utils/api.js
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + "/users", // Make sure this is correct
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
