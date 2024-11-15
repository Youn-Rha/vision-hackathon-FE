import { useRef, useEffect } from "react";

import { Button } from "@/components/Button";
import { Chat } from "@/components/Chat";
import { PageBar } from "@/components/PageBar";
import { TextArea } from "@/components/TextArea";

import { useChatSave } from "@/hooks/ChatPage/useChatSave";
import { useChatStart } from "@/hooks/ChatPage/useChatStart";

import * as Styles from "./index.style";
import { ChatEntry } from "@/apis/chatbot/chatbot";

export const ChatPage = () => {
    const { chatHistory, textAreaRef, handleSendMessage } = useChatStart();
    const { handleChatSave } = useChatSave();

    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chatHistory]);

    const handleSaveAndGoBack = async () => {
        const formattedChatHistory = chatHistory.reduce<ChatEntry[]>((acc, msg, idx, arr) => {
            if (msg.variant === "AI" && arr[idx + 1]?.variant === "USER") {
                acc.push({
                    question: msg.text,
                    response: arr[idx + 1].text,
                    responseDateTime: new Date().toISOString(),
                    type: "chat",
                });
            }
            return acc;
        }, []);
        await handleChatSave(formattedChatHistory); // 채팅 기록 저장
        window.history.back(); // 뒤로 가기
    };

    return (
        <Styles.Container>
            <Styles.FixedHeader>
                <PageBar pageName="채팅" onClick={handleSaveAndGoBack} />
            </Styles.FixedHeader>

            <Styles.ChatContainer>
                {chatHistory.map((message, index) => (
                    <Styles.MessageWrapper key={index} variant={message.variant}>
                        <Chat variant={message.variant}>{message.text}</Chat>
                    </Styles.MessageWrapper>
                ))}
                <div ref={messagesEndRef} />
            </Styles.ChatContainer>

            <Styles.InputContainer>
                <TextArea ref={textAreaRef} variant="secondary" width="80%" height="60px" placeholder="메세지 입력" />
                <Button variant="rectangle" width="70px" height="60px" onClick={handleSendMessage}>
                    전송
                </Button>
            </Styles.InputContainer>
        </Styles.Container>
    );
};
