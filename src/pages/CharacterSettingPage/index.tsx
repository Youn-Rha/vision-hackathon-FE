import React, { useRef, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { Temp } from "@/components/Temp";
import { Text } from "@/components/Text";
import { useSettingCharacter } from "@/hooks/CharacterSettingPage/useSettingCharacter";
import * as Styles from "./index.style";

export const CharacterSettingPage = () => {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    // 훅에서 이름과 메시지, 이름 설정 함수 가져오기
    const { characterName, message, handleCharacterName } = useSettingCharacter("new");

    const handlePopUp = useCallback(() => {
        setIsPopUpOpen((prev) => !prev);
    }, []);

    useEffect(() => {
        if (message) {
            alert(message);
        }
    }, [message]);

    const updateName = useCallback(() => {
        if (inputRef.current) {
            const newName = inputRef.current.value;
            handleCharacterName(newName); // 새 이름 설정 및 API 호출
        }
        handlePopUp();
    }, [handleCharacterName, handlePopUp]);

    const handleNextPage = useCallback(() => {
        navigate("/character/start");
    }, [navigate]);

    return (
        <Styles.Container>
            <Styles.TextContainer>
                <Text size="xl" color="black" weight="bold">
                    안녕하세요!
                </Text>
                <Styles.TextItem>
                    <Text size="xl" color="black" weight="bold">
                        저는&nbsp;
                    </Text>
                    <Text size="xl" color="primary" weight="bold">
                        {characterName}
                    </Text>
                    <Text size="xl" color="black" weight="bold">
                        이에요.
                    </Text>
                </Styles.TextItem>
            </Styles.TextContainer>

            <Temp width="370px" height="330px" />

            <Text size="s" color="gray" weight="normal">
                제 이름을 지어주세요.
            </Text>

            <Styles.ButtonContainer>
                <Button variant="rectangle" width="48%" height="140px" onClick={handlePopUp}>
                    이름 지어주기
                </Button>
                <Button variant="rectangle" width="48%" height="140px" onClick={handleNextPage}>
                    다음으로
                </Button>
            </Styles.ButtonContainer>

            {isPopUpOpen && (
                <Styles.PopUpContainer>
                    <Styles.PopUpWrapper>
                        <Text size="m" color="black" weight="bold">
                            새로운 이름을 입력해주세요:
                        </Text>
                        <Styles.InputContainer type="text" ref={inputRef}></Styles.InputContainer>
                        <Button variant="rectangle" width="100%" height="70px" onClick={updateName}>
                            확인
                        </Button>
                    </Styles.PopUpWrapper>
                </Styles.PopUpContainer>
            )}
        </Styles.Container>
    );
};