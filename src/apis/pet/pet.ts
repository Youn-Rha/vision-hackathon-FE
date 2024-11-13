import axiosInstance from "../axiosInstance";

interface PetInfo {
    name: string;
    level: number;
    experience: number;
}

/**
 * 팻 정보 조회 (GET /api/pet)
 * @returns {Promise<PetInfo>} 팻 정보
 */
export const getPetInfo = async (): Promise<PetInfo> => {
    const response = await axiosInstance.get<PetInfo>("/api/pet");
    return response.data;
};

/**
 * 팻 이름 변경 (PUT /api/pet)
 * @param name 새로운 팻 이름
 * @returns {Promise<{ message: string }>} 메시지 반환
 */
export const updatePetName = async (name: string): Promise<{ message: string }> => {
    const response = await axiosInstance.put<{ message: string }>("/api/pet", { name });
    return response.data;
};

/**
 * 팻 획득 (POST /api/pet)
 * @param name 팻 이름
 * @returns {Promise<{ message: string }>} 메시지 반환
 */
export const acquirePet = async (name: string): Promise<{ message: string }> => {
    const response = await axiosInstance.post<{ message: string }>("/api/pet", { name });
    return response.data;
};

/**
 * 팻 성장 버튼 구매 (POST /api/pet/{growthButton})
 * @param growthButton NORMAL, PREMIUM, SUPER 중 하나
 * @returns {Promise<{ EarnedExperience: number }>} 획득한 경험치 반환
 */
export const purchaseGrowthButton = async (growthButton: "NORMAL" | "PREMIUM" | "SUPER"): Promise<{ EarnedExperience: number }> => {
    const response = await axiosInstance.post<{ EarnedExperience: number }>(`/api/pet/${growthButton}`);
    return response.data;
};