import axiosInstance from "../axiosInstance";

/**
 * 사용자가 작성한 모든 진단표 결과 조회 (GET /api/survey)
 * @returns {Array} [{ surveyId, writtenDateTime, answer: [0, ...] }, ...]
 */
export const getAllSurveyResults = async () => {
    const response = await axiosInstance.get("/api/survey");
    return response.data;
};

/**
 * 진단표 작성 결과 저장 (POST /api/survey)
 * @param {Array} answer 진단표 답변 리스트 [0, 1, ...]
 * @returns {object} { message }
 */
export const saveSurveyResult = async (answer) => {
    const response = await axiosInstance.post("/api/survey", { Answer: answer });
    return response.data;
};

/**
 * 인공지능이 작성한 가장 최근의 진단표 결과 조회 (GET /api/survey/ai)
 * @returns {object} { surveyId, writtenDateTime, answer: [0, ...] }
 */
export const getLatestAISurveyResult = async () => {
    const response = await axiosInstance.get("/api/survey/ai");
    return response.data;
};
