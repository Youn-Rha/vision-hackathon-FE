import { useState, useRef, useEffect } from "react";

import { Button } from "@/components/Button";
import { Chat } from "@/components/Chat";
import { PageBar } from "@/components/PageBar";
import { TextArea } from "@/components/TextArea";

import * as Styles from "./index.style";

export const ChatPage = () => {
    const [messages, setMessages] = useState<{ variant: "AI" | "USER"; text: string }[]>([
        { variant: "AI", text: "무엇을 도와드릴까요?" },
    ]);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const handleSendClick = () => {
        const inputText = textAreaRef.current?.value.trim();
        if (!inputText) return;

        setMessages((prevMessages) => [...prevMessages, { variant: "USER", text: inputText }]);

        if (textAreaRef.current) {
            textAreaRef.current.value = "";
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <Styles.Container>
            <Styles.FixedHeader>
                <PageBar pageName="채팅" />
            </Styles.FixedHeader>

            <Styles.ChatContainer>
                {messages.map((message, index) => (
                    <Styles.MessageWrapper key={index} variant={message.variant}>
                        <Chat variant={message.variant}>{message.text}</Chat>
                    </Styles.MessageWrapper>
                ))}
                <div ref={messagesEndRef} />
            </Styles.ChatContainer>

            <Styles.InputContainer>
                <TextArea ref={textAreaRef} variant="secondary" width="80%" height="60px" placeholder="메세지 입력" />
                <Button variant="rectangle" width="70px" height="60px" onClick={handleSendClick}>
                    전송
                </Button>
            </Styles.InputContainer>
        </Styles.Container>
    );
};
