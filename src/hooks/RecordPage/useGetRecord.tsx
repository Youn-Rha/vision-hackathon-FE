import { useState, useEffect } from "react";

import { getChatHistory } from "@/apis/chatbot/chatbot";
import { getDiariesByDate } from "@/apis/diary/diary";
import { getResponsesByDate } from "@/apis/question/question";

// 질문과 응답을 함께 가져오는 훅
export const useGetResponsesByDate = (localDate: string) => {
    const [question, setQuestion] = useState<string>("💡 오늘 소소하게 느낀 행복이 있나요?");
    const [response, setResponse] = useState<string>("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const responses = await getResponsesByDate(localDate);
                setQuestion(responses.length > 0 ? responses[0].question : "오늘 질문이 없습니다.");
                setResponse(responses.length > 0 ? responses[0].response : "아직 작성하지 않았어요");
            } catch (err) {
                setError("Failed to fetch responses " + err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [localDate]);

    return { question, response, loading, error };
};

// 일기 데이터 가져오기 훅
export const useGetDiariesByDate = (localDate: string) => {
    const [data, setData] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const diaries = await getDiariesByDate(localDate);
                setData([
                    diaries[0]?.content || "아직 작성하지 않았어요.",
                    diaries[1]?.content || "아직 작성하지 않았어요.",
                    diaries[2]?.content || "아직 작성하지 않았어요.",
                ]);
            } catch (err) {
                setError("Failed to fetch diaries " + err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [localDate]);

    return { data, loading, error };
};

// 채팅 기록 가져오기 훅
export const useGetChatHistory = (type: "chat", localDateTime: string) => {
    const [data, setData] = useState<{ variant: "AI" | "USER"; text: string }[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const chatHistory = await getChatHistory(type, localDateTime);
                setData(
                    chatHistory.flatMap((chat) => [
                        {
                            variant: "AI",
                            text: chat.question,
                        },
                        {
                            variant: "USER",
                            text: chat.response,
                        },
                    ]),
                );
            } catch (err) {
                setError("Failed to fetch chat history " + err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [type, localDateTime]);

    return { data, loading, error };
};
