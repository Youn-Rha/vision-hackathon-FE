import { useState, useRef } from "react";

import { startOrContinueChat } from "@/apis/chatbot/chatbot";

interface ChatEntry {
    question: string;
    response: string;
    responseDateTime: string;
    type: "chat" | "diary";
}

export const useChatStart = () => {
    const [chatHistory, setChatHistory] = useState<{ variant: "AI" | "USER"; text: string }[]>([
        { variant: "AI", text: "무엇을 도와드릴까요?" },
    ]);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleSendMessage = async () => {
        const userMessage = textAreaRef.current?.value.trim();
        if (!userMessage) return;

        const currentDateTime = new Date().toISOString();
        const newEntry: ChatEntry = {
            question: "",
            response: userMessage,
            responseDateTime: currentDateTime,
            type: "chat",
        };

        // 사용자의 메시지 추가
        setChatHistory((prevHistory) => [...prevHistory, { variant: "USER", text: userMessage }]);

        // AI의 응답을 요청
        try {
            const response = await startOrContinueChat("chat", [
                ...chatHistory.map((msg) => ({
                    question: msg.variant === "AI" ? msg.text : "",
                    response: msg.variant === "USER" ? msg.text : "",
                    responseDateTime: new Date().toISOString(),
                    type: "chat" as const, // 타입을 "chat"으로 단언합니다
                })),
                newEntry,
            ]);

            // AI의 응답을 chatHistory에 추가
            setChatHistory((prevHistory) => [...prevHistory, { variant: "AI", text: response.response }]);
        } catch (error) {
            const errorMessage =
                (error as { response?: { data?: { detail?: string } } }).response?.data?.detail ||
                "An unknown error occurred";
            console.error("Chat failed:", errorMessage);
        }

        if (textAreaRef.current) {
            textAreaRef.current.value = "";
        }
    };

    return { chatHistory, textAreaRef, handleSendMessage };
};
