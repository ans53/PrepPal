import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, // sends httpOnly session cookie to same-site API
});


// Handle 401 globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      error.response.status === 401 &&
      window.location.pathname !== "/login"
    ) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;