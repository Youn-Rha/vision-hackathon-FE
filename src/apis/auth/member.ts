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

interface MemberInfo {
    name: string;
    email: string;
}

/**
 * 로그인한 사용자의 정보 조회 (GET /api/members)
 * @returns {Promise<MemberInfo>} 사용자 이름과 이메일
 */
export const getUserInfo = async (): Promise<MemberInfo> => {
    const response = await axiosInstance.get<MemberInfo>("/api/members");
    return response.data;
};