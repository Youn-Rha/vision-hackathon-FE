import { CharacterBG } from "../../components/CharacterBG";
import { PageBar } from "../../components/PageBar";
import { Text } from "../../components/Text";
import * as Styles from "./index.style";
import Character from "../../assets/react.svg";
import { useMyPage } from "../../hooks/MyPage/useMyPage";

export const MyPage = () => {
    const { userData, loading } = useMyPage();

    return (
        <Styles.Container>
            <PageBar pageName="마이페이지" />
            <CharacterBG width="150px" height="150px" imageUrl={Character} />
            <Styles.TextContainer>
                {loading ? (
                    <Text size="m" weight="bold">로딩 중...</Text>
                ) : (
                    <>
                        <Text size="m" weight="bold">{userData.name}</Text>
                        <Text size="m" weight="bold">{userData.email}</Text>
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
                <Styles.Button size="16px" color="gray" style={{ marginTop: "8px" }}>회원 탈퇴</Styles.Button>
            </Styles.TextContainer>
        </Styles.Container>
    );
};