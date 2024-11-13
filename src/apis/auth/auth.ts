import axiosInstance from "../axiosInstance";
import { useAuthStore } from "@/store";

/**
 * 토큰 재발급 (POST /api/auth/refresh)
 * @param refreshToken 재발급에 사용할 RefreshToken
 * @returns {Promise<{ accessToken: string; refreshToken: string }>}
 */
export const refreshToken = async (refreshToken: string): Promise<{ accessToken: string; refreshToken: string }> => {
    const response = await axiosInstance.post<{ accessToken: string; refreshToken: string }>("/api/auth/refresh", {
        refreshToken,
    });
    return response.data;
};

/**
 * Oauth 카카오 인증페이지 리다이렉트 (GET /api/auth/oauth/kakao)
 * @returns {Promise<string>} 카카오 로그인 화면으로의 리다이렉트 URL
 */
export const redirectToKakaoLogin = async (): Promise<string> => {
    const response = await axiosInstance.get("/api/auth/oauth/kakao");
    return response.request.responseURL; // 리다이렉트 URL 반환
};

/**
 * Oauth 카카오 로그인 콜백 (GET /api/auth/oauth/kakao/callback)
 * @param code 카카오 인증 후 받은 인가 코드
 * @returns {Promise<{ accessToken: string; refreshToken: string }>}
 */
export const kakaoLoginCallback = async (code: string): Promise<{ accessToken: string; refreshToken: string }> => {
    const response = await axiosInstance.get<{ accessToken: string; refreshToken: string }>(
        "/api/auth/oauth/kakao/callback",
        {
            params: { code },
        },
    );
    const { accessToken, refreshToken } = response.data;
    useAuthStore.getState().setTokens(accessToken, refreshToken);
    return response.data;
};
