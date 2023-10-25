import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
});

// Add a request interceptor for global configuration
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify the request headers here if needed
    config.headers.Authorization = `Bearer ${sessionStorage.getItem(
      "RESUMEBUILDERLOGINTOKEN"
    )}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor for global error handling
axiosInstance.interceptors.response.use(
  (response): any => ({ status: response.status, data: response.data }),
  (error) => {
    // Handle network errors, server errors, or other response errors here
    if (error.response) {
      toast.error(error.response.data.message);
    } else if (error.request) {
      console.error("Network Error:", error.message);
      toast.error("Slow Network Connection.");
    } else {
      console.error("Request Error:", error.message);
      toast.error("Something Went Wrong.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
