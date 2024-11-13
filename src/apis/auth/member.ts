import axiosInstance from "../axiosInstance";

/**
 * 임시 로그인 (POST /api/temp/login)
 * @param name 사용자 이름
 * @param email 사용자 이메일
 * @returns {Promise<{ accessToken: string; refreshToken: string }>}
 */
export const tempLogin = async (
    name: string,
    email: string
): Promise<{ accessToken: string; refreshToken: string }> => {
    const response = await axiosInstance.post<{ accessToken: string; refreshToken: string }>("/api/temp/login", {
        name,
        email,
    });
    return response.data;
};

/**
 * 회원 탈퇴 (DELETE /api/members/withdrawal)
 * @returns {Promise<{ message: string }>} 탈퇴 성공 메시지
 */
export const withdrawMember = async (): Promise<{ message: string }> => {
    const response = await axiosInstance.delete<{ message: string }>("/api/members/withdrawal");
    return response.data;
};