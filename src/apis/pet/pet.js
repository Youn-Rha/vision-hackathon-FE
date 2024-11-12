import axiosInstance from "../axiosInstance";

/**
 * 팻 정보 조회 (GET /api/pet)
 * @returns {object} { name, level, experience }
 */
export const getPetInfo = async () => {
    const response = await axiosInstance.get("/api/pet");
    return response.data;
};

/**
 * 팻 이름 변경 (PUT /api/pet)
 * @param {string} name 새로운 팻 이름
 * @returns {object} { message }
 */
export const updatePetName = async (name) => {
    const response = await axiosInstance.put("/api/pet", { name });
    return response.data;
};

/**
 * 팻 획득 (POST /api/pet)
 * @param {string} name 팻 이름
 * @returns {object} { message }
 */
export const acquirePet = async (name) => {
    const response = await axiosInstance.post("/api/pet", { name });
    return response.data;
};

/**
 * 팻 성장 버튼 구매 (POST /api/pet/{growthButton})
 * @param {string} growthButton NORMAL, PREMIUM, SUPER 중 하나
 * @returns {object} { EarnedExperience }
 */
export const purchaseGrowthButton = async (growthButton) => {
    const response = await axiosInstance.post(`/api/pet/${growthButton}`);
    return response.data;
};
