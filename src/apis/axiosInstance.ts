import axios, { AxiosResponse, InternalAxiosRequestConfig, AxiosRequestHeaders } from "axios";

import { useAuthStore } from "../store";

// Axios 인스턴스 생성
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL as string,
});

// 요청 인터셉터
axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    // const { accessToken } = useAuthStore.getState();
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
        if (!config.headers) {
            config.headers = {} as AxiosRequestHeaders; // 빈 객체를 AxiosRequestHeaders로 캐스팅
        }
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

// 응답 인터셉터
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = useAuthStore.getState().refreshToken;

            if (refreshToken) {
                try {
                    // Refresh token으로 새로운 Access token 발급
                    const response = await axiosInstance.post<{ accessToken: string; refreshToken: string }>(
                        "/api/auth/refresh",
                        { refreshToken },
                    );

                    const { accessToken, refreshToken: newRefreshToken } = response.data;
                    // 새 토큰을 store에 저장
                    useAuthStore.getState().setTokens(accessToken, newRefreshToken);

                    // 실패했던 요청에 새 access token 추가 후 재요청
                    if (!originalRequest.headers) {
                        originalRequest.headers = {} as AxiosRequestHeaders; // 빈 객체를 AxiosRequestHeaders로 캐스팅
                    }
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
    },
);

export default axiosInstance;
