import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/Button";
import { CharacterBG } from "@/components/CharacterBG";
import { IconButton } from "@/components/IconButton";
import { Text } from "@/components/Text";
import { TextArea } from "@/components/TextArea";

import { useGetQuestion } from "@/hooks/MainPage/useGetQuestion";
import { useGetUser } from "@/hooks/MainPage/useGetUser";
import { useWriteAnswer } from "@/hooks/MainPage/useWriteAnswer";

import * as Styles from "./index.style";

export const MainPage = () => {
    const navigate = useNavigate();
    const { data: name } = useGetUser();
    const { id, question, AnsweredToday, answer, fetchData } = useGetQuestion();
    const { handleWriteAnswer: writeAnswer, inputRef } = useWriteAnswer();

    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    const today = new Date();

    const handleCalendarClick = () => {
        navigate("/memo");
    };
    const handleUserClick = () => {
        navigate("/mypage");
    };
    const handleChatClick = () => {
        navigate("/chat");
    };
    const handleCharacterClick = () => {
        navigate("/character");
    };
    const handleLogoClick = () => {
        navigate("/main");
    };
    const handlePopUp = useCallback(() => {
        if (AnsweredToday) return;
        setIsPopUpOpen((prev) => !prev);
    }, [AnsweredToday]);

    const handleWriteAnswer = useCallback(async () => {
        await writeAnswer({ questionId: id ?? 0, response: inputRef.current?.value || "" });
        await fetchData();
        handlePopUp();
    }, [handlePopUp, writeAnswer, id, fetchData]);

    return (
        <Styles.Container>
            <Styles.Header>
                <Styles.Logo onClick={handleLogoClick}>Logo</Styles.Logo>
                <Styles.HeaderIcons>
                    <IconButton variant="calendar" onClick={handleCalendarClick} />
                    <IconButton variant="user" onClick={handleUserClick} />
                    <IconButton variant="chat" onClick={handleChatClick} />
                </Styles.HeaderIcons>
            </Styles.Header>
            <Styles.Header>
                <Text size="l" color="black" weight="bold">
                    {name ? name : "user"}님 기다렸어요!
                </Text>
            </Styles.Header>
            <CharacterBG width="350px" height="350px" imageUrl="" onClick={handleCharacterClick}></CharacterBG>
            <Styles.QContainer onClick={handlePopUp}>
                <Text size="s" color="gray" weight="normal">
                    TODAY - {today.getMonth() + 1}월 {today.getDate()}일
                </Text>
                <Text size="l" color="black" weight="bold">
                    {question}
                </Text>
                {AnsweredToday && <Styles.AnswerContainer>{answer}</Styles.AnswerContainer>}
            </Styles.QContainer>

            {isPopUpOpen && (
                <Styles.PopUpContainer>
                    <Styles.PopUpWrapper>
                        <Text size="m" color="black" weight="bold">
                            답변을 작성해보세요:
                        </Text>
                        <TextArea variant="primary" width="100%" height="100px" ref={inputRef}></TextArea>
                        <Button variant="rectangle" width="100%" height="70px" onClick={handleWriteAnswer}>
                            확인
                        </Button>
                    </Styles.PopUpWrapper>
                </Styles.PopUpContainer>
            )}
        </Styles.Container>
    );
};
