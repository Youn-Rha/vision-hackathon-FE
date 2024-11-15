import { useState } from "react";

import { Chat } from "@/components/Chat";
import { PageBar } from "@/components/PageBar";
import { Text } from "@/components/Text";
import { TextArea } from "@/components/TextArea";

import { useGetResponsesByDate, useGetDiariesByDate, useGetChatHistory } from "@/hooks/RecordPage/useGetRecord";

import * as Styles from "./index.style";

export const RecordPage = () => {
    const [date, setDate] = useState(new Date());
    const [active, setActive] = useState(0);
    const formattedDate = date.toISOString().split("T")[0]; // YYYY-MM-DD 형식으로 변환
    const formattedDateTime = date.toISOString().split(".")[0]; // 소수점 없는 형식

    const { question, response, loading: loading, error: error } = useGetResponsesByDate(formattedDate);
    const { data: diaryData, loading: loadingDiaries, error: errorDiaries } = useGetDiariesByDate(formattedDate);
    // const messages: { variant: "AI" | "USER"; text: string; spacing: number }[] = [
    //     { variant: "AI", text: "무엇을 도와드릴까요?", spacing: 5 },
    //     { variant: "USER", text: "안녕하세요", spacing: 25 },
    //     { variant: "AI", text: "안녕하세요! 무엇을 도와드릴까요?", spacing: 5 },
    //     { variant: "USER", text: "오늘 날씨가 어떤가요?", spacing: 25 },
    //     { variant: "AI", text: "오늘 날씨는 맑고 화창합니다!", spacing: 5 },
    //     { variant: "USER", text: "감사합니다!", spacing: 25 },
    // ];
    const { data: messages, loading: loadingChat, error: errorChat } = useGetChatHistory("chat", formattedDateTime);

    const handleTabClick = (index: number) => {
        setActive(index);
    };

    const handlePrevDay = () => {
        setDate((prevDate) => new Date(prevDate.getTime() - 24 * 60 * 60 * 1000));
    };

    const handleNextDay = () => {
        setDate((prevDate) => new Date(prevDate.getTime() + 24 * 60 * 60 * 1000));
    };

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

            {active === 0 && (
                <Styles.TextContainer>
                    <Text size="m" color="black" weight="bold">
                        {loading ? "로딩 중..." : error ? "오류 발생" : question}
                    </Text>
                    <TextArea
                        variant="primary"
                        readOnly={true}
                        value={loading ? "로딩 중..." : error ? "오류 발생" : response}
                    ></TextArea>
                </Styles.TextContainer>
            )}
            {active === 1 && (
                <Styles.TabContent>
                    {[0, 1, 2].map((i) => (
                        <Styles.TextContainer key={i}>
                            <Text size="m" color="black" weight="bold">
                                {`${i + 1}. 오늘은 어떤 일이 있었나요?`}
                            </Text>
                            <TextArea
                                variant="primary"
                                readOnly={true}
                                value={
                                    loadingDiaries
                                        ? "로딩 중..."
                                        : errorDiaries
                                          ? "오류 발생"
                                          : diaryData[i] || "No entry"
                                }
                            ></TextArea>
                        </Styles.TextContainer>
                    ))}
                </Styles.TabContent>
            )}
            {active === 2 && (
                <Styles.ChatContainer>
                    {loadingChat
                        ? "로딩 중..."
                        : errorChat
                          ? "오류 발생"
                          : messages.map((message, index) => (
                                <Styles.MessageWrapper key={index} variant={message.variant}>
                                    <Chat variant={message.variant}>{message.text}</Chat>
                                </Styles.MessageWrapper>
                            ))}
                </Styles.ChatContainer>
            )}
        </Styles.Container>
    );
};
