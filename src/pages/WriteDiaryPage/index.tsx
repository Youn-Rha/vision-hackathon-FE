import { useRef } from "react";

import { Button } from "@/components/Button";
import { Temp } from "@/components/Temp";
import { TextArea } from "@/components/TextArea";

import { PageBar } from "../../components/PageBar";
import { Text } from "../../components/Text";
import * as Styles from "./index.style";

export const WriteDiaryPage = () => {
    const answer1Ref = useRef<HTMLTextAreaElement>(null);
    const answer2Ref = useRef<HTMLTextAreaElement>(null);
    const answer3Ref = useRef<HTMLTextAreaElement>(null);

    const answers = {
        answer1: answer1Ref.current?.value || null,
        answer2: answer2Ref.current?.value || null,
        answer3: answer3Ref.current?.value || null,
    };

    const handleSubmitClick = () => {
        //post 요청
        console.log(answers);
    };

    return (
        <Styles.Container>
            <Styles.FixedHeader>
                <PageBar pageName="일기 작성" />
            </Styles.FixedHeader>

            <Styles.TextContainer>
                <Text size="l" weight="bold" color="black">
                    답변을 작성해보아요
                </Text>
                <Text size="s" weight="normal" color="gray">
                    하루를 되돌아볼 수 있고, 캐릭터도 성장할 수 있어요!
                </Text>
            </Styles.TextContainer>

            <Temp width="200px" height="180px"></Temp>

            <Styles.QContainer>
                <Text size="m" weight="bold" color="black">
                    1. 오늘은 어떤 일이 있었나요?
                </Text>
                <TextArea ref={answer1Ref} variant="primary" width="100%" height="100px"></TextArea>
            </Styles.QContainer>

            <Styles.QContainer>
                <Text size="m" weight="bold" color="black">
                    2. 오늘의 감정은 어땠나요?
                </Text>
                <TextArea ref={answer2Ref} variant="primary" width="100%" height="100px"></TextArea>
            </Styles.QContainer>

            <Styles.QContainer>
                <Text size="m" weight="bold" color="black">
                    3. 오늘의 하루를 한 줄로 표현해보세요.
                </Text>
                <TextArea ref={answer3Ref} variant="primary" width="100%" height="100px"></TextArea>
            </Styles.QContainer>

            <Button variant="rectangle" width="100%" height="60px" onClick={handleSubmitClick}>
                작성 완료
            </Button>
        </Styles.Container>
    );
};
