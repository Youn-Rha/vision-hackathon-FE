import { PageBar } from "@/components/PageBar";
import { Temp } from "@/components/Temp";
import { Text } from "@/components/Text";
import * as Styles from "./index.style";
import { TextArea } from "@/components/TextArea";
import { useGetResult } from "@/hooks/ResultPage/useGetResult";

export const ResultPage = () => {
    const { data, loading, error } = useGetResult();

    // 로딩 중, 에러, 정상 데이터의 상태에 따라 placeholder 내용을 결정
    const placeholderText = loading
        ? "로딩 중..."
        : error
        ? "데이터를 불러오는 중 문제가 발생했습니다."
        : "";

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
                <TextArea
                    variant="primary"
                    readOnly={true}
                    value={loading || error ? "" : data}
                    placeholder={placeholderText}
                />
            </Styles.ResultWrapper>
        </Styles.Container>
    );
};