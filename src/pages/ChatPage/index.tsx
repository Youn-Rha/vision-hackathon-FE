import { useRef, useEffect } from "react";

import { Button } from "@/components/Button";
import { Chat } from "@/components/Chat";
import { PageBar } from "@/components/PageBar";
import { TextArea } from "@/components/TextArea";

import { useChatStart } from "@/hooks/ChatPage/useChatStart";

import * as Styles from "./index.style";

export const ChatPage = () => {
    const { chatHistory, textAreaRef, handleSendMessage } = useChatStart();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chatHistory]);

    return (
        <Styles.Container>
            <Styles.FixedHeader>
                <PageBar pageName="채팅" />
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
