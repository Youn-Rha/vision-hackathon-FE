import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { kakaoLoginCallback_kkia } from "../../apis/auth/auth.ts";
import { useAuthStore } from "../../store.ts";

export const RedirectPage = () => {
    const navigate = useNavigate();
    const setTokens = useAuthStore((state) => state.setTokens);

    useEffect(() => {
        const fetchData = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get("code");

            if (code) {
                try {
                    const response = await kakaoLoginCallback_kkia(code);
                    setTokens(response.accessToken, response.refreshToken);
                    // 리다이렉트할 경로를 로컬스토리지에서 가져오고, 기본값을 "/"로 설정
                    const redirectPath = localStorage.getItem("redirectPath") || "/main";
                    localStorage.removeItem("redirectPath"); // 사용 후 경로 삭제
                    navigate(redirectPath);
                } catch (error) {
                    console.error("토큰 요청 에러:", error);
                }
            }
        };

        fetchData();
    }, [navigate, setTokens]);

    return <div>카카오 로그인 중입니다…</div>;
};