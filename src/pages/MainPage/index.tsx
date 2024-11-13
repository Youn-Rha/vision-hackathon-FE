import { useNavigate } from "react-router-dom";

import { CharacterBG } from "@/components/CharacterBG";
import { IconButton } from "@/components/IconButton";
import { Text } from "@/components/Text";

import * as Styles from "./index.style";

export const MainPage = () => {
    const navigate = useNavigate();

    const handleCalendarClick = () => {
        navigate("/memo");
    };

    const handleUserClick = () => {
        navigate("/mypage");
    };

    const handleChatClick = () => {
        navigate("/chat");
    };

    return (
        <Styles.Container>
            <Styles.Header>
                <Styles.Logo>Logo</Styles.Logo>
                <Styles.HeaderIcons>
                    <IconButton variant="calendar" onClick={handleCalendarClick} />
                    <IconButton variant="user" onClick={handleUserClick} />
                    <IconButton variant="chat" onClick={handleChatClick} />
                </Styles.HeaderIcons>
            </Styles.Header>
            <Styles.Header>
                <Text size="l" color="black" weight="bold">
                    user 님 기다렸어요!
                </Text>
            </Styles.Header>
            <CharacterBG width="350px" height="350px" imageUrl=""></CharacterBG>
            <Styles.QContainer>
                <Text size="s" color="gray" weight="normal">
                    DAY 1
                </Text>
                <Text size="l" color="black" weight="bold">
                    오늘 소소하게 느낀 행복이 있나요?
                </Text>
            </Styles.QContainer>
        </Styles.Container>
    );
};
