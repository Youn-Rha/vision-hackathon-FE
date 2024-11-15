import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/Button";

import { useGetCharacter } from "@/hooks/CharacterPage/useGetCharacter";
import { useSettingCharacter } from "@/hooks/CharacterSettingPage/useSettingCharacter";

import Character from "../../assets/react.svg";
import { CharacterBG } from "../../components/CharacterBG";
import { PageBar } from "../../components/PageBar";
import { Text } from "../../components/Text";
import { useMyPage } from "../../hooks/MyPage/useMyPage";
import * as Styles from "./index.style";
import { withdrawMember } from "@/apis/auth/member";

export const MyPage = () => {
    const { userData, loading } = useMyPage();
    const { name, refetch: refetchCharacter } = useGetCharacter(); // name과 refetchCharacter 가져오기
    const navi = useNavigate();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    // useSettingCharacter 훅에서 handleCharacterName, message 가져오기
    const { message, handleCharacterName } = useSettingCharacter("edit");

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
            handleCharacterName(newName).then(() => refetchCharacter()); // API 호출 후 refetchCharacter 실행
        }
        handlePopUp();
    }, [handleCharacterName, handlePopUp, refetchCharacter]);

    const handleBackArrow = () => {
        navi("/main");
    };

    return (
        <Styles.Container>
            <PageBar pageName="마이페이지" onClick={handleBackArrow} />
            <Styles.ProfileContainer>
                <CharacterBG width="150px" height="150px" imageUrl={Character} onClick={() => navi("/character")} />
                <Styles.NameContainer>
                    <Text size="s" weight="bold">
                        ({name}) {/* name을 표시 */}
                    </Text>
                    <Styles.EditButton onClick={handlePopUp}>이름 변경</Styles.EditButton>
                </Styles.NameContainer>
            </Styles.ProfileContainer>

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

            <Styles.TextContainer>
                {loading ? (
                    <Text size="m" weight="bold">
                        로딩 중...
                    </Text>
                ) : (
                    <>
                        <Text size="m" weight="bold">
                            {userData.name}
                        </Text>
                        <Text size="m" weight="bold">
                            {userData.email}
                        </Text>
                    </>
                )}
            </Styles.TextContainer>

            <Styles.TextContainer>
                <Styles.Button size="20px" color="black" onClick={() => navi("/record")}>
                    기록 캘린더 보기
                </Styles.Button>
                <Styles.Divider />
                <Styles.Button size="20px" color="black" onClick={() => navi("/check/start")}>
                    자가 문진표 확인
                </Styles.Button>
                <Styles.Divider />
                <Styles.Button size="20px" color="black" onClick={() => navi("/result")}>
                    진단 결과 확인
                </Styles.Button>
            </Styles.TextContainer>

            <Styles.TextContainer>
                <Styles.Button size="16px" color="black" onClick={() => navi("/login")}>
                    로그아웃
                </Styles.Button>
                <Styles.Button
                    size="16px"
                    color="gray"
                    style={{ marginTop: "8px" }}
                    onClick={() => {
                        withdrawMember();
                        navi("/login");
                    }}
                >
                    회원 탈퇴
                </Styles.Button>
            </Styles.TextContainer>
        </Styles.Container>
    );
};
