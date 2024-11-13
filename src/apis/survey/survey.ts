import axiosInstance from "../axiosInstance";

interface SurveyResult {
    surveyId: number;
    writtenDateTime: string;
    answer: number[];
}

/**
 * 사용자가 작성한 모든 진단표 결과 조회 (GET /api/survey)
 * @returns {Promise<SurveyResult>} 사용자가 작성한 진단표 결과 배열
 */
export const getAllSurveyResults = async (): Promise<SurveyResult> => {
    const response = await axiosInstance.get<SurveyResult>("/api/survey/user", {});
    return response.data;
};

/**
 * 진단표 작성 결과 저장 (POST /api/survey)
 * @param answer 진단표 답변 리스트 [0, 1, ...]
 * @returns {Promise<{ message: string }>} 저장 성공 메시지
 */
export const saveSurveyResult = async (answer: number[]): Promise<{ message: string }> => {
    const response = await axiosInstance.post<{ message: string }>("/api/survey", { Answer: answer });
    return response.data;
};

/**
 * 인공지능이 작성한 가장 최근의 진단표 결과 조회 (GET /api/survey/ai)
 * @returns {Promise<SurveyResult>} 최근 AI 진단 결과
 */
export const getLatestAISurveyResult = async (): Promise<SurveyResult> => {
    const response = await axiosInstance.get<SurveyResult>("/api/survey/ai");
    return response.data;
};
