import { useState, useRef } from "react";

import { startOrContinueChat } from "@/apis/chatbot/chatbot";

// interface ChatEntry {
//     question: string;
//     response: string;
//     responseDateTime: string;
//     type: "chat" | "diary";
// }

export const useChatStart = () => {
    const [chatHistory, setChatHistory] = useState<{ variant: "AI" | "USER"; text: string }[]>([
        { variant: "AI", text: "무엇을 도와드릴까요?" },
    ]);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleSendMessage = async () => {
        const userMessage = textAreaRef.current?.value.trim();
        if (!userMessage) return;

        const currentDateTime = new Date().toISOString();

        // 사용자의 메시지 추가
        setChatHistory((prevHistory) => [...prevHistory, { variant: "USER", text: userMessage }]);

        const newChatHistory = [...chatHistory, { variant: "USER", text: userMessage }];

        const conversations = [];

        for (let i = 0; i < newChatHistory.length; i += 2) {
            conversations.push({
                question: newChatHistory[i].text,
                response: newChatHistory[i + 1].text,
                responseDateTime: currentDateTime,
                type: "chat" as const,
            });
        }

        // AI의 응답 요청
        try {
            const response = await startOrContinueChat("chat", conversations);

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
