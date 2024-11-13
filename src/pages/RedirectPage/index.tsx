import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { kakaoLoginCallback } from "../../apis/auth/auth.ts";
import { useAuthStore } from "@/store.ts";
import { useAuthStore } from "../../store";

export const RedirectPage = () => {
    const navigate = useNavigate();
    const setTokens = useAuthStore((state) => state.setTokens);

    useEffect(() => {
        const fetchData = async () => {
            // URL에서 code 추출
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get("code");

            if (code) {
                try {
                    // 백엔드에 GET 요청을 보내서 토큰을 가져옴
                    const response = await kakaoLoginCallback(code);
                    console.log("토큰 응답: ", response);

                    // 응답에서 accessToken과 refreshToken을 로컬스토리지에 저장
                    localStorage.setItem("accessToken", response.accessToken);
                    localStorage.setItem("refreshToken", response.refreshToken);
                    setTokens(response.accessToken, response.refreshToken);
                    console.log(useAuthStore.getState());

                    // /main으로 이동
                    navigate("/");
                } catch (error) {
                    console.error("토큰 요청 에러:", error);
                }
            }
        };

        fetchData();
    }, [navigate, setTokens]);

    return <div>카카오 로그인 중입니다...</div>;
};
