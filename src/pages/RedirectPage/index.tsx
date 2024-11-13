import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { kakaoLoginCallback } from "../../apis/auth/auth.ts";
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
          const response = await kakaoLoginCallback(code);
          setTokens(response.accessToken, response.refreshToken);
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