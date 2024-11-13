import axiosInstance from "../axiosInstance";

/**
 * 질문 수정 (관리자용) (PUT /api/question/{dailyQuestionId})
 * @param {number} dailyQuestionId 수정할 질문의 ID
 * @param {string} question 새로운 질문 내용
 * @returns {object} { message }
 */
export const updateQuestion = async (dailyQuestionId, question) => {
    const response = await axiosInstance.put(`/api/question/${dailyQuestionId}`, { question });
    return response.data;
};

/**
 * 질문 삭제 (관리자용) (DELETE /api/question/{dailyQuestionId})
 * @param {number} dailyQuestionId 삭제할 질문의 ID
 * @returns {object} { message }
 */
export const deleteQuestion = async (dailyQuestionId) => {
    const response = await axiosInstance.delete(`/api/question/${dailyQuestionId}`);
    return response.data;
};

/**
 * 답변 등록 (POST /api/response)
 * @param {number} questionId 답변할 질문의 ID
 * @param {string} response 답변 내용
 * @returns {object} { message }
 */
export const createResponse = async (questionId, response) => {
    const res = await axiosInstance.post("/api/response", { questionId, response });
    return res.data;
};

/**
 * 랜덤 질문 조회 (GET /api/question)
 * @returns {object} { id, question }
 */
export const getRandomQuestion = async () => {
    const response = await axiosInstance.get("/api/question");
    return response.data;
};

/**
 * 질문 추가 (관리자용) (POST /api/question)
 * @param {string} question 추가할 질문 내용
 * @returns {object} { message }
 */
export const addQuestion = async (question) => {
    const response = await axiosInstance.post("/api/question", { question });
    return response.data;
};

/**
 * 특정 답변 조회 (GET /api/response/{dailyResponseId})
 * @param {number} dailyResponseId 조회할 답변의 ID
 * @returns {object} { id, question, response }
 */
export const getResponseById = async (dailyResponseId) => {
    const response = await axiosInstance.get(`/api/response/${dailyResponseId}`);
    return response.data;
};

/**
 * 답변 삭제 (DELETE /api/response/{dailyResponseId})
 * @param {number} dailyResponseId 삭제할 답변의 ID
 * @returns {object} { message }
 */
export const deleteResponse = async (dailyResponseId) => {
    const response = await axiosInstance.delete(`/api/response/${dailyResponseId}`);
    return response.data;
};

/**
 * 날짜별 답변 조회 (GET /api/response/all/{localDate})
 * @param {string} localDate 조회할 날짜 (YYYY-MM-DD 형식)
 * @returns {Array} [{ id, question, response }, ...]
 */
export const getResponsesByDate = async (localDate) => {
    const response = await axiosInstance.get(`/api/response/all/${localDate}`);
    return response.data;
};

/**
 * 모든 질문 조회 (관리자용) (GET /api/question/all)
 * @returns {Array} [{ id, question }, ...]
 */
export const getAllQuestions = async () => {
    const response = await axiosInstance.get("/api/question/all");
    return response.data;
};
