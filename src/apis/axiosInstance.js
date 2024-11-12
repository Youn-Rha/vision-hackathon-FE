import axios from "axios";
import { useAuthStore } from "../store";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore.getState();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = useAuthStore.getState().refreshToken;

      if (refreshToken) {
        try {
          // Refresh token으로 새로운 Access token 발급
          const response = await axiosInstance.post("/api/auth/refresh", { refreshToken });

          const { accessToken, refreshToken: newRefreshToken } = response.data;
          // 새 토큰을 store에 저장
          useAuthStore.getState().setTokens(accessToken, newRefreshToken);

          // 실패했던 요청에 새 access token 추가 후 재요청
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          // refresh token이 유효하지 않은 경우 로그아웃 처리
          useAuthStore.getState().clearAuth();
          return Promise.reject(refreshError);
        }
      } else {
        // refresh token이 없는 경우 로그아웃 처리
        useAuthStore.getState().clearAuth();
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
