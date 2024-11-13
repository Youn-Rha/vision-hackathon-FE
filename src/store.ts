import { create } from "zustand";

// 상태 타입 정의
interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  setTokens: (accessToken: string, refreshToken: string) => void;
  clearAuth: () => void;
}

// useAuthStore 상태 관리 설정
export const useAuthStore = create<AuthState>((set) => {
  // 로컬 스토리지에서 초기 토큰 읽기
  const initialAccessToken = localStorage.getItem("accessToken");
  const initialRefreshToken = localStorage.getItem("refreshToken");

  return {
    accessToken: initialAccessToken,
    refreshToken: initialRefreshToken,

    // 토큰 설정 함수
    setTokens: (accessToken: string, refreshToken: string) => {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      set({ accessToken, refreshToken });
    },

    // 토큰 및 인증 상태 초기화 함수
    clearAuth: () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      set({ accessToken: null, refreshToken: null });
    },
  };
});