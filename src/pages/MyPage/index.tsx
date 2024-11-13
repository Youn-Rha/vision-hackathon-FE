import { useState, useEffect } from "react";

import Character from "../../assets/react.svg";
import { CharacterBG } from "../../components/CharacterBG";
import { PageBar } from "../../components/PageBar";
import { Text } from "../../components/Text";
import * as Styles from "./index.style";

export const MyPage = () => {
    const [name, setName] = useState<string>("이름");
    const [email, setEmail] = useState<string>("example@co.kr");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch("/api/user");
                const data = await response.json();
                setName(data.name || "이름 없음");
                setEmail(data.email || "이메일 없음");
            } catch (error) {
                console.error("Failed to fetch user data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUserData();
    }, []);

    return (
        <Styles.Container>
            <PageBar pageName="마이페이지" />
            <CharacterBG width="150px" height="150px" imageUrl={Character} />
            <Styles.TextContainer>
                {loading ? (
                    <Text size="m" weight="bold">
                        로딩 중...
                    </Text>
                ) : (
                    <>
                        <Text size="m" weight="bold">
                            {name}
                        </Text>
                        <Text size="m" weight="bold">
                            {email}
                        </Text>
                    </>
                )}
            </Styles.TextContainer>
            <Styles.TextContainer>
                <Styles.Button size="20px" color="black">
                    기록 캘린더 보기
                </Styles.Button>
                <Styles.Divider />
                <Styles.Button size="20px" color="black">
                    자가 문진표 확인
                </Styles.Button>
                <Styles.Divider />
                <Styles.Button size="20px" color="black">
                    진단 결과 확인
                </Styles.Button>
            </Styles.TextContainer>
            <Styles.TextContainer>
                <Styles.Button size="16px" color="black">
                    로그아웃
                </Styles.Button>
                <Styles.Button size="16px" color="gray" style={{ marginTop: "8px" }}>
                    회원 탈퇴
                </Styles.Button>
            </Styles.TextContainer>
        </Styles.Container>
    );
};
