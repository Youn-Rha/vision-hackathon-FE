import { useNavigate } from "react-router-dom";

import { Button } from "@/components/Button";
import { Temp } from "@/components/Temp";
import { TextArea } from "@/components/TextArea";

import { useGetCharacter } from "@/hooks/CharacterPage/useGetCharacter";
import { useWriteDiary } from "@/hooks/WriteDiaryPage/useWriteDiary";

import { PageBar } from "../../components/PageBar";
import { Text } from "../../components/Text";
import * as Styles from "./index.style";

export const WriteDiaryPage = () => {
    const navigate = useNavigate();

    const { answer1Ref, answer2Ref, answer3Ref, handleWriteDiary } = useWriteDiary();
    const { level } = useGetCharacter();

    const handleSubmitClick = () => {
        handleWriteDiary([
            { type: "DAY", content: answer1Ref.current?.value || "" },
            { type: "EMOTION", content: answer2Ref.current?.value || "" },
            { type: "MEMO", content: answer3Ref.current?.value || "" },
        ]);
        alert("일기가 성공적으로 작성되었습니다!");
        navigate("/main");
    };

    const handleBackArrow = () => {
        navigate("/main");
    };

    return (
        <Styles.Container>
            <Styles.FixedHeader>
                <PageBar pageName="일기 작성" onClick={handleBackArrow} />
            </Styles.FixedHeader>

            <Styles.TextContainer>
                <Text size="l" weight="bold" color="black">
                    답변을 작성해보아요
                </Text>
                <Text size="s" weight="normal" color="gray">
                    하루를 되돌아볼 수 있고, 캐릭터도 성장할 수 있어요!
                </Text>
            </Styles.TextContainer>

            <Temp width="200px" height="180px" level={level}></Temp>

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
