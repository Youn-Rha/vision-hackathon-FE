import { Button } from "@/components/Button";
import { Temp } from "@/components/Temp";
import { Text } from "@/components/Text";

import * as Styles from "./index.style";

export const LoginPage = () => {
    return (
        <Styles.Container>
            <Styles.TextContainer>
                <Text size="xl" color="black" weight="bold">
                    ___에 오신 것을 환영합니다
                </Text>
                <Text size="s" color="gray" weight="normal">
                    로그인 후 ___ 서비스를 경험해보세요
                </Text>
            </Styles.TextContainer>
            <Temp width="250px" height="220px" />
            <Button variant="login" width="320px" height="67px">
                카카오 계정으로 로그인
            </Button>
        </Styles.Container>
    );
};
