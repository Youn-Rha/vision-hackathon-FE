import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { PageBar } from "../../components/PageBar";
import { Text } from "../../components/Text";
import * as Styles from "./index.style";
import { useMyPage } from "@/hooks/MyPage/useMyPage";

export const CheckEndPage = () => {
    const { userData, loading } = useMyPage();
    const navi = useNavigate();

    return (
        <Styles.Container>
            <PageBar pageName="문진표 작성" />
            <Styles.Wrapper>
                <Styles.TextContainer>
                    <Text size="l" weight="normal" color="white">
                        감사합니다.
                    </Text>
                    <br />
                    <Text size="l" weight="normal" color="white">
                        {loading ? (
                            "로딩 중..." // 로딩 중일 때 표시할 텍스트
                        ) : (
                            <span style={{ textDecoration: "underline" }}>{userData.name}</span>
                        )}{" "}
                        님의 더 나은 오늘을
                    </Text>
                    <Text size="l" weight="normal" color="white">
                        응원할게요!
                    </Text>
                </Styles.TextContainer>
                <Button variant="secondary" width="152px" height="45px" onClick={() => navi("/main")}>
                    홈으로
                </Button>
            </Styles.Wrapper>
        </Styles.Container>
    );
};
