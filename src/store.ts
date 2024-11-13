import { create, StateCreator } from "zustand";

// 상태 타입 정의
interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  setTokens: (accessToken: string, refreshToken: string) => void;
  clearAuth: () => void;
}

// useAuthStore 상태 관리 설정
export const useAuthStore = create<AuthState>(
  ((set) => ({
    accessToken: null,
    refreshToken: null,

    // 토큰 설정 함수
    setTokens: (accessToken: string, refreshToken: string) =>
      set({ accessToken, refreshToken }),

    // 토큰 및 인증 상태 초기화 함수
    clearAuth: () => set({ accessToken: null, refreshToken: null }),
  })) as StateCreator<AuthState>
);