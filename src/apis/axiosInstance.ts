import axios, { AxiosResponse, InternalAxiosRequestConfig, AxiosRequestHeaders, AxiosHeaders } from "axios";
import { useAuthStore } from "../store";

let isAlertDisplayed = false; // alert 한 번만 표시되도록 제어하는 플래그

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL as string,
});

// 요청 인터셉터
axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const { accessToken } = useAuthStore.getState();
    if (accessToken) {
        config.headers = new AxiosHeaders({
            ...(config.headers as AxiosRequestHeaders),
            Authorization: `Bearer ${accessToken}`,
        }) as AxiosRequestHeaders;
    }
    return config;
});

// 응답 인터셉터
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
        if (error.response) {
            const status = error.response.status;

            if (status === 461 && !originalRequest._retry) {
                // accessToken이 만료된 경우 (461)
                originalRequest._retry = true;
                const refreshToken = useAuthStore.getState().refreshToken;

                if (refreshToken) {
                    try {
                        const response = await axiosInstance.post<{ accessToken: string; refreshToken: string }>(
                            "/api/auth/refresh",
                            { refreshToken },
                        );

                        const { accessToken, refreshToken: newRefreshToken } = response.data;
                        useAuthStore.getState().setTokens(accessToken, newRefreshToken);

                        // 실패했던 요청에 새 access token 추가 후 재요청
                        originalRequest.headers = originalRequest.headers || ({} as AxiosRequestHeaders);
                        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                        return axiosInstance(originalRequest);
                    } catch (refreshError) {
                        // refresh token이 유효하지 않은 경우 로그아웃 처리
                        useAuthStore.getState().clearAuth();
                        localStorage.setItem("redirectPath", window.location.pathname);
                        if (!isAlertDisplayed) {
                            isAlertDisplayed = true;
                            alert("다시 로그인 해 주세요.");
                            window.location.href = "/login";
                        }
                        return Promise.reject(refreshError);
                    }
                } else {
                    // refresh token이 없는 경우 로그아웃 처리
                    localStorage.setItem("redirectPath", window.location.pathname);
                    useAuthStore.getState().clearAuth();
                    if (!isAlertDisplayed) {
                        isAlertDisplayed = true;
                        alert("다시 로그인 해 주세요.");
                        window.location.href = "/login";
                    }
                }
            } else if (status === 401) {
                // 401 에러: 로그인 필요
                useAuthStore.getState().clearAuth();
                localStorage.setItem("redirectPath", window.location.pathname);
                if (!isAlertDisplayed) {
                    isAlertDisplayed = true;
                    alert("다시 로그인 해 주세요.");
                    window.location.href = "/login";
                }
            } else if (status === 404) {
                // 404 에러: 펫을 획득 요청
                if (!isAlertDisplayed) {
                    isAlertDisplayed = true;
                    alert("펫을 획득해주세요.");
                    window.location.href = "/character/setting";
                }
            }
        }

        return Promise.reject(error);
    },
);

export default axiosInstance;