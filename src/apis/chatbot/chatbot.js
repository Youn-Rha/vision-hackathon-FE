import axiosInstance from "../axiosInstance";

/**
 * 채팅 시작/진행 (POST /api/gemini/chat/{type})
 * @param {string} type 채팅 타입 ("chat" 또는 "diary")
 * @param {Array} chatHistory 채팅 기록 [{ question, response, responseDateTime, type }, ...]
 * @returns {object} { response, type }
 */
export const startOrContinueChat = async (type, chatHistory) => {
    const response = await axiosInstance.post(`/api/gemini/chat/${type}`, chatHistory);
    return response.data;
};

/**
 * 채팅 기록 저장 (POST /api/chatbot/save/{type})
 * @param {string} type 채팅 타입 ("chat" 또는 "diary")
 * @param {Array} chatHistory 저장할 채팅 기록 [{ question, response, responseDateTime, type }, ...]
 * @returns {object} 저장 성공 여부 메시지
 */
export const saveChatHistory = async (type, chatHistory) => {
    const response = await axiosInstance.post(`/api/chatbot/save/${type}`, chatHistory);
    return response.data;
};

/**
 * Gemini 자가 진단 (GET /api/chatbot/selftest)
 * @returns {object} { totalScore, question: [{ num, score, reason }], summary }
 */
export const geminiSelfTest = async () => {
    const response = await axiosInstance.get("/api/chatbot/selftest");
    return response.data;
};

/**
 * 채팅 기록 불러오기 (GET /api/chatbot/get/{type}/{localDateTime})
 * @param {string} type 채팅 타입 ("chat" 또는 "diary")
 * @param {string} localDateTime 조회할 날짜/시간 (YYYY-MM-DDTHH:mm:ss 형식)
 * @returns {Array} [{ question, response, responseDateTime, type }, ...]
 */
export const getChatHistory = async (type, localDateTime) => {
    const response = await axiosInstance.get(`/api/chatbot/get/${type}/${localDateTime}`);
    return response.data;
};
