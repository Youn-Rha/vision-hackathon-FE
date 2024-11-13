import axiosInstance from "../axiosInstance";

/**
 * 토큰 재발급 (POST /api/auth/refresh)
 * @param {string} refreshToken 재발급에 사용할 RefreshToken
 * @returns {object} { accessToken, refreshToken }
 */
export const refreshToken = async (refreshToken) => {
    const response = await axiosInstance.post("/api/auth/refresh", { refreshToken });
    return response.data;
};

/**
 * Oauth 카카오 인증페이지 리다이렉트 (GET /api/auth/oauth/kakao)
 * @returns {string} 카카오 로그인 화면으로의 리다이렉트 URL
 */
export const redirectToKakaoLogin = async () => {
    const response = await axiosInstance.get("/api/auth/oauth/kakao");
    return response.request.responseURL; // 리다이렉트 URL 반환
};

/**
 * Oauth 카카오 로그인 콜백 (GET /api/auth/oauth/kakao/callback)
 * @param {string} code 카카오 인증 후 받은 인가 코드
 * @returns {object} { accessToken, refreshToken }
 */
export const kakaoLoginCallback = async (code) => {
    const response = await axiosInstance.get(`/api/auth/oauth/kakao/callback`, {
        params: { code }
    });
    return response.data;
};
