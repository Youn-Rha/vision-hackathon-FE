import { useState } from "react";

import { Chat } from "@/components/Chat";
import { PageBar } from "@/components/PageBar";
import { Text } from "@/components/Text";
import { TextArea } from "@/components/TextArea";

import * as Styles from "./index.style";

export const RecordPage = () => {
    const [date, setDate] = useState(new Date());
    const [active, setActive] = useState(0);

    const handleTabClick = (index: number) => {
        setActive(index);
    };

    const handlePrevDay = () => {
        setDate((prevDate) => new Date(prevDate.getTime() - 24 * 60 * 60 * 1000));
    };

    const handleNextDay = () => {
        setDate((prevDate) => new Date(prevDate.getTime() + 24 * 60 * 60 * 1000));
    };

    const messages: { variant: "AI" | "USER"; text: string; spacing: number }[] = [
        { variant: "AI", text: "무엇을 도와드릴까요?", spacing: 5 },
        { variant: "USER", text: "안녕하세요", spacing: 25 },
        { variant: "AI", text: "안녕하세요! 무엇을 도와드릴까요?", spacing: 5 },
        { variant: "USER", text: "오늘 날씨가 어떤가요?", spacing: 25 },
        { variant: "AI", text: "오늘 날씨는 맑고 화창합니다!", spacing: 5 },
        { variant: "USER", text: "감사합니다!", spacing: 25 },
    ];

    return (
        <Styles.Container>
            <Styles.FixedHeader>
                <PageBar pageName="내 기록 보기" />
            </Styles.FixedHeader>

            <Styles.DateContainer>
                <Styles.ArrowButton direction="left" onClick={handlePrevDay}></Styles.ArrowButton>
                <Styles.DateText>
                    {date.toLocaleDateString("ko-KR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </Styles.DateText>
                <Styles.ArrowButton direction="right" onClick={handleNextDay}></Styles.ArrowButton>
            </Styles.DateContainer>

            {/* Tab Buttons */}
            <Styles.Tabs>
                <Styles.Tab onClick={() => handleTabClick(0)} active={active === 0}>
                    1일 1 질문
                </Styles.Tab>
                <Styles.Tab onClick={() => handleTabClick(1)} active={active === 1}>
                    일기
                </Styles.Tab>
                <Styles.Tab onClick={() => handleTabClick(2)} active={active === 2}>
                    채팅
                </Styles.Tab>
            </Styles.Tabs>

            {/* Tab Content */}
            {active === 0 && (
                <Styles.TextContainer>
                    <Text size="m" color="black" weight="bold">
                        💡 오늘 소소하게 느낀 행복이 있나요?
                    </Text>
                    <TextArea variant="primary" readOnly={true}>
                        붕어빵을 사 먹었음
                    </TextArea>
                </Styles.TextContainer>
            )}
            {active === 1 && (
                <Styles.TabContent>
                    <Styles.TextContainer>
                        <Text size="m" color="black" weight="bold">
                            1. 오늘은 어떤 일이 있었나요?
                        </Text>
                        <TextArea variant="primary" readOnly={true}>
                            집에 가는 길에 택시를 탐
                        </TextArea>
                    </Styles.TextContainer>

                    <Styles.TextContainer>
                        <Text size="m" color="black" weight="bold">
                            2. 오늘은 어떤 일이 있었나요?
                        </Text>
                        <TextArea variant="primary" readOnly={true}>
                            집에 가는 길에 택시를 탐
                        </TextArea>
                    </Styles.TextContainer>

                    <Styles.TextContainer>
                        <Text size="m" color="black" weight="bold">
                            3. 오늘은 어떤 일이 있었나요?
                        </Text>
                        <TextArea variant="primary" readOnly={true}>
                            집에 가는 길에 택시를 탐
                        </TextArea>
                    </Styles.TextContainer>
                </Styles.TabContent>
            )}
            {active === 2 && (
                <Styles.ChatContainer>
                    {messages.map((message, index) => (
                        <Styles.MessageWrapper key={index} variant={message.variant} spacing={message.spacing}>
                            <Chat variant={message.variant}>{message.text}</Chat>
                        </Styles.MessageWrapper>
                    ))}
                </Styles.ChatContainer>
            )}
        </Styles.Container>
    );
};
