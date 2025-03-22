import axios from "axios";

// Axios instance create karo
const api = axios.create({
  baseURL: "https://reqres.in/api", // API ka base URL
});

// Request Interceptor (Token Inject karega)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response Interceptor (Auto Logout if Unauthorized)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token"); // Token remove
      window.location.href = "/"; // Redirect to login
    }
    return Promise.reject(error);
  }
);

export default api;
