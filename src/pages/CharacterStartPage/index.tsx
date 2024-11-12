import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/Button";
import { Temp } from "@/components/Temp";
import { Text } from "@/components/Text";

import * as Styles from "@/pages/CharacterSettingPage/index.style";

export const CharacterStartPage = () => {
    const navigate = useNavigate();

    const handleNextPage = useCallback(() => {
        navigate("/");
    }, []);

    return (
        <Styles.Container>
            <Styles.TextContainer>
                <Text size="xl" color="primary" weight="bold">
                    캐릭터 이름
                </Text>
                <Styles.TextItem>
                    <Text size="xl" color="black" weight="bold">
                        너무&nbsp;
                    </Text>
                    <Text size="xl" color="black" weight="bold">
                        마음에
                    </Text>
                    <Text size="xl" color="black" weight="bold">
                        들어요!
                    </Text>
                </Styles.TextItem>
            </Styles.TextContainer>

            <Temp width="370px" height="330px" />

            <Button variant="primary" width="150px" height="45px" onClick={handleNextPage}>
                시작하기
            </Button>
        </Styles.Container>
    );
};
