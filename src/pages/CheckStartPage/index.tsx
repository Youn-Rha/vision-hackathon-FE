import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { PageBar } from "../../components/PageBar";
import { Text } from "../../components/Text";
import * as Styles from "./index.style";
import { useMyPage } from "@/hooks/MyPage/useMyPage";

export const CheckStartPage = () => {
    const { userData, loading } = useMyPage();
    const navi = useNavigate();

    return (
        <Styles.Container>
            <PageBar pageName="문진표 작성" />
            <Styles.Wrapper>
                <Styles.TextContainer>
                    <Text size="l" weight="normal" color="white">
                        {loading ? (
                            "로딩 중..." // 로딩 중일 때 표시할 텍스트
                        ) : (
                            <span style={{ textDecoration: "underline" }}>{userData.name}</span>
                        )}{" "}
                        님은 요즘 어떠신가요?
                    </Text>
                </Styles.TextContainer>
                <Button variant="secondary" width="152px" height="45px" onClick={() => navi("/check")}>
                    시작하기
                </Button>
            </Styles.Wrapper>
        </Styles.Container>
    );
};
