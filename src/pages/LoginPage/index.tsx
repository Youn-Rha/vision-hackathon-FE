import { Button } from "@/components/Button";
import { Temp } from "@/components/Temp";
import { Text } from "@/components/Text";

import * as Styles from "./index.style";

export const LoginPage = () => {
    const handleKakaoLogin = () => {
        window.location.href = "http://kkia.backapi.site:8080/api/auth/oauth/kakao";
    };
    return (
        <Styles.Container>
            <Styles.TextContainer>
                <Styles.TextElement>
                    <Text size="l" color="primary" weight="bold">
                        "Dan Dan"
                    </Text>
                    <Text size="l" color="black" weight="bold">
                        에 오신 것을 환영합니다
                    </Text>
                </Styles.TextElement>
                <Text size="s" color="gray" weight="normal">
                    로그인 후 DanDan 서비스를 경험해보세요
                </Text>
            </Styles.TextContainer>
            <Temp width="250px" height="220px" />
            <Button variant="login" width="320px" height="67px" onClick={handleKakaoLogin}>
                카카오 계정으로 로그인
            </Button>
        </Styles.Container>
    );
};
