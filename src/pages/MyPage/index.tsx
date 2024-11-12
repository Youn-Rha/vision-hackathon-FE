import { useState, useEffect } from "react";
import { CharacterBG } from "../../components/CharacterBG";
import { PageBar } from "../../components/PageBar";
import { Text } from "../../components/Text";
import Character from "../../assets/react.svg";
import * as Styles from "./index.style";
import { Button } from "../../components/Button";

export const MyPage = () => {
    const [name, setName] = useState<string>("이름");
    const [email, setEmail] = useState<string>("example@co.kr");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        // API 요청 함수 정의
        const fetchUserData = async () => {
            try {
                // API 호출 (예시 URL 사용)
                const response = await fetch("/api/user");
                const data = await response.json();
                // 받아온 데이터로 상태 업데이트
                setName(data.name || "이름 없음");
                setEmail(data.email || "이메일 없음");
            } catch (error) {
                console.error("Failed to fetch user data:", error);
            } finally {
                setLoading(false); // 로딩 상태 종료
            }
        };
        fetchUserData(); // 데이터 불러오기 함수 호출
    }, []);

    return (
        <Styles.Container>
            <PageBar pagename="마이페이지" />
            <CharacterBG width="176px" height="176px" imageUrl={Character} />
            <Styles.TextContainer>
                {loading ? (
                    <Text size="m" weight="bold">로딩 중...</Text>
                ) : (
                    <>
                        <Text size="m" weight="bold">{name}</Text>
                        <Text size="m" weight="bold">{email}</Text>
                    </>
                )}
            </Styles.TextContainer>
            <Styles.TextContainer>
                <Styles.Button size="20px" color="black">기록 캘린더 보기</Styles.Button>
                <Styles.Divider />
                <Styles.Button size="20px" color="black">자가 문진표 확인</Styles.Button>
                <Styles.Divider />
                <Styles.Button size="20px" color="black">진단 결과 확인</Styles.Button>
            </Styles.TextContainer>
            <Styles.TextContainer>
                <Styles.Button size="16px" color="black">로그아웃</Styles.Button>
                <div/>
                <Styles.Button size="16px" color="gray">회원 탈퇴</Styles.Button>
            </Styles.TextContainer>
        </Styles.Container>
    );
};