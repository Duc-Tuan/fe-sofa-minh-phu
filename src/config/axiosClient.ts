import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.NEXT_URL_API,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

// Request interceptor
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor - xử lý lỗi
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Kiểm tra nếu lỗi là 401 (Unauthorized) hoặc 403 (Forbidden)
    if (error.response?.status === 401 || error.response?.status === 403) {
      // Xóa token khỏi localStorage
      localStorage.removeItem('token');
      // Chuyển hướng về trang login
      // window.location.href = "/";
    }
    // Cách khác: trả về lỗi để component xử lý
    return Promise.reject(error);
  }
);

export default axiosClient;
