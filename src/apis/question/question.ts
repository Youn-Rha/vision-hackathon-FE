import axiosInstance from "../axiosInstance";

interface Question {
    id: number;
    question: string;
}

interface Response {
    id: number;
    question: string;
    response: string;
}

/**
 * 질문 수정 (관리자용) (PUT /api/question/{dailyQuestionId})
 * @param dailyQuestionId 수정할 질문의 ID
 * @param question 새로운 질문 내용
 * @returns {Promise<{ message: string }>}
 */
export const updateQuestion = async (
    dailyQuestionId: number,
    question: string
): Promise<{ message: string }> => {
    const response = await axiosInstance.put<{ message: string }>(`/api/question/${dailyQuestionId}`, { question });
    return response.data;
};

/**
 * 질문 삭제 (관리자용) (DELETE /api/question/{dailyQuestionId})
 * @param dailyQuestionId 삭제할 질문의 ID
 * @returns {Promise<{ message: string }>}
 */
export const deleteQuestion = async (dailyQuestionId: number): Promise<{ message: string }> => {
    const response = await axiosInstance.delete<{ message: string }>(`/api/question/${dailyQuestionId}`);
    return response.data;
};

/**
 * 답변 등록 (POST /api/response)
 * @param questionId 답변할 질문의 ID
 * @param response 답변 내용
 * @returns {Promise<{ message: string }>}
 */
export const createResponse = async (
    questionId: number,
    response: string
): Promise<{ message: string }> => {
    const res = await axiosInstance.post<{ message: string }>("/api/response", { questionId, response });
    return res.data;
};

/**
 * 랜덤 질문 조회 (GET /api/question)
 * @returns {Promise<Question>} 랜덤 질문
 */
export const getRandomQuestion = async (): Promise<Question> => {
    const response = await axiosInstance.get<Question>("/api/question");
    return response.data;
};

/**
 * 질문 추가 (관리자용) (POST /api/question)
 * @param question 추가할 질문 내용
 * @returns {Promise<{ message: string }>}
 */
export const addQuestion = async (question: string): Promise<{ message: string }> => {
    const response = await axiosInstance.post<{ message: string }>("/api/question", { question });
    return response.data;
};

/**
 * 특정 답변 조회 (GET /api/response/{dailyResponseId})
 * @param dailyResponseId 조회할 답변의 ID
 * @returns {Promise<Response>}
 */
export const getResponseById = async (dailyResponseId: number): Promise<Response> => {
    const response = await axiosInstance.get<Response>(`/api/response/${dailyResponseId}`);
    return response.data;
};

/**
 * 답변 삭제 (DELETE /api/response/{dailyResponseId})
 * @param dailyResponseId 삭제할 답변의 ID
 * @returns {Promise<{ message: string }>}
 */
export const deleteResponse = async (dailyResponseId: number): Promise<{ message: string }> => {
    const response = await axiosInstance.delete<{ message: string }>(`/api/response/${dailyResponseId}`);
    return response.data;
};

/**
 * 날짜별 답변 조회 (GET /api/response/all/{localDate})
 * @param localDate 조회할 날짜 (YYYY-MM-DD 형식)
 * @returns {Promise<Response[]>} 날짜별 답변 배열
 */
export const getResponsesByDate = async (localDate: string): Promise<Response[]> => {
    const response = await axiosInstance.get<Response[]>(`/api/response/all/${localDate}`);
    return response.data;
};

/**
 * 모든 질문 조회 (관리자용) (GET /api/question/all)
 * @returns {Promise<Question[]>} 모든 질문 배열
 */
export const getAllQuestions = async (): Promise<Question[]> => {
    const response = await axiosInstance.get<Question[]>("/api/question/all");
    return response.data;
};