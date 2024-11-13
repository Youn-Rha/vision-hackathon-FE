import { PageBar } from "../../components/PageBar";
import { Temp } from "../../components/Temp";
import { Text } from "../../components/Text";
import { TextArea } from "../../components/TextArea";
import * as Styles from "./index.style";

export const ResultPage = () => {
    return (
        <Styles.Container>
            <PageBar pageName="진단 결과" />
            <Styles.TextContainer>
                <Text size="s" weight="bold">
                    작성한 답변들로 분석해보았어요
                </Text>
                <Text size="xs" color="gray">
                    지금껏 작성한 일기와 대화들로 분석한 결과를 확인해 보세요
                </Text>
            </Styles.TextContainer>
            <Temp width="100px" height="100px" />
            
            <Styles.ResultWrapper>
                <Text size="m" weight="bold">결과</Text>
                <TextArea variant="primary" />
            </Styles.ResultWrapper>
        </Styles.Container>
    );
};