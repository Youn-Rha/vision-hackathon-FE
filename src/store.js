import create from "zustand";

// useAuthStore 상태 관리 설정
export const useAuthStore = create((set) => ({
  accessToken: null,
  refreshToken: null,

  // 토큰 설정 함수
  setTokens: (accessToken, refreshToken) => set({ accessToken, refreshToken }),

  // 토큰 및 인증 상태 초기화 함수
  clearAuth: () => set({ accessToken: null, refreshToken: null }),
}));

