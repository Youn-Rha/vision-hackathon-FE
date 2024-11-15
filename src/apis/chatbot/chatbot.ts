import axiosInstance from "../axiosInstance";

export interface ChatEntry {
    question: string;
    response: string;
    responseDateTime: string;
    type: "chat" | "diary";
}

/**
 * 채팅 시작/진행 (POST /api/gemini/chat/{type})
 * @param type 채팅 타입 ("chat" 또는 "diary")
 * @param chatHistory 채팅 기록
 * @returns {Promise<{ response: string; type: "chat" | "diary" }>}
 */
export const startOrContinueChat = async (
    type: "chat" | "diary",
    chatHistory: ChatEntry[]
): Promise<{ response: string; type: "chat" | "diary" }> => {
    const response = await axiosInstance.post<{ response: string; type: "chat" | "diary" }>(
        `/api/gemini/chat/${type}`,
        chatHistory
    );
    return response.data;
};

/**
 * 채팅 기록 저장 (POST /api/chatbot/save/{type})
 * @param type 채팅 타입 ("chat" 또는 "diary")
 * @param chatHistory 저장할 채팅 기록
 * @returns {Promise<{ message: string }>} 저장 성공 여부 메시지
 */
export const saveChatHistory = async (
    type: "chat" | "diary",
    chatHistory: ChatEntry[]
): Promise<{ message: string }> => {
    const response = await axiosInstance.post<{ message: string }>(`/api/chatbot/save/${type}`, chatHistory);
    return response.data;
};

/**
 * Gemini 자가 진단 (GET /api/chatbot/selftest)
 * @returns {Promise<{ totalScore: number; question: { num: number; score: number; reason: string }[]; summary: string }>}
 */
export const geminiSelfTest = async (): Promise<{
    totalScore: number;
    question: { num: number; score: number; reason: string }[];
    summary: string;
}> => {
    const response = await axiosInstance.get<{
        totalScore: number;
        question: { num: number; score: number; reason: string }[];
        summary: string;
    }>("/api/chatbot/selftest");
    return response.data;
};

/**
 * 채팅 기록 불러오기 (GET /api/chatbot/get/{type}/{localDateTime})
 * @param type 채팅 타입 ("chat" 또는 "diary")
 * @param localDateTime 조회할 날짜/시간 (YYYY-MM-DDTHH:mm:ss 형식)
 * @returns {Promise<ChatEntry[]>} 채팅 기록 배열
 */
export const getChatHistory = async (
    type: "chat" | "diary",
    localDateTime: string
): Promise<ChatEntry[]> => {
    const response = await axiosInstance.get<ChatEntry[]>(`/api/chatbot/get/${type}/${localDateTime}`);
    return response.data;
};