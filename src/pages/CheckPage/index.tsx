import { useEffect, useState } from "react";

import { Button } from "../../components/Button";
import { CheckBar } from "../../components/CheckBar";
import { PageBar } from "../../components/PageBar";
import { Text } from "../../components/Text";
import * as Styles from "./index.style";

const questions = [
    { id: 1, text: "일을 하는 것에 대한 흥미나 재미가 거의 없다." },
    { id: 2, text: "가라앉는 느낌, 우울감 혹은 절망감이 든다." },
    { id: 3, text: "잠들기 어렵거나 자꾸 깨어난다, 또는 너무 많이 잔다." },
    { id: 4, text: "식욕이 저하되거나 또는 과식을 하게 된다." },
    { id: 5, text: "나 자신이 나쁜 사람이라는 느낌이 든다." },
    { id: 6, text: "무기력하거나 지나치게 피곤함을 느낀다." },
    { id: 7, text: "집중하기 어렵거나 산만해지는 경향이 있다." },
    { id: 8, text: "움직임이 느려지거나 지나치게 안절부절못한다." },
    { id: 9, text: "죽음이나 자해에 대한 생각이 들곤 한다." },
];

interface CheckPageProps {
    id: number;
    text: string;
}

export const CheckPage = (): JSX.Element => {
    //const [questions, setQuestions] = useState<CheckPageProps[]>([]);
    const [answers, setAnswers] = useState<{ [key: number]: number }>({});

    useEffect(() => {
        // 백엔드에서 질문 데이터를 받아오는 함수
        const fetchQuestions = async () => {
            try {
                const response = await fetch("/api/questions");
                const data = await response.json();
                //setQuestions(data);
            } catch (error) {
                console.error("Failed to fetch questions:", error);
            }
        };
        fetchQuestions();
    }, []);

    const handleAnswerChange = (questionId: number, value: number) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: value,
        }));

        // 변경된 값을 백엔드로 전송
        sendAnswerToBackend(questionId, value);
    };

    const sendAnswerToBackend = async (questionId: number, value: number) => {
        try {
            await fetch("/api/submit-answer", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ questionId, answer: value }),
            });
        } catch (error) {
            console.error("Failed to send answer:", error);
        }
    };

    return (
        <Styles.Container>
            <Styles.FixedHeader>
                <PageBar pagename="문진표 작성" />
            </Styles.FixedHeader>

            <Styles.QuestionsContainer>
                {questions.map((question) => (
                    <Styles.QuestionWrapper key={question.id}>
                        <Text size="s" weight="bold">
                            {question.text}
                        </Text>
                        <CheckBar
                            value={answers[question.id] || 50} // 초기값 50
                            onChange={(value) => handleAnswerChange(question.id, value)}
                        />
                    </Styles.QuestionWrapper>
                ))}
            </Styles.QuestionsContainer>
            <Styles.FixedFooter>
                <Button variant="tertiary" width="152px" height="45px">
                    제출하기
                </Button>
            </Styles.FixedFooter>
        </Styles.Container>
    );
};
