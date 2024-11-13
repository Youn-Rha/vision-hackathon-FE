import { useState, useEffect } from "react";

import { getAllSurveyResults, saveSurveyResult } from "../../apis/survey/survey";
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

export const CheckPage = (): JSX.Element => {
    const [answers, setAnswers] = useState<{ [key: number]: number }>({});
    const [initialAnswers, setInitialAnswers] = useState<number[]>([]); // 초기 불러온 answer 상태

    useEffect(() => {
        // 불러온 데이터를 초기 상태로 설정
        const fetchInitialAnswers = async () => {
            try {
                const data = await getAllSurveyResults();
                const fetchedAnswers = data.answer;
                setInitialAnswers(fetchedAnswers);

                // answers 초기 상태 설정
                const initialAnswersObject = questions.reduce(
                    (acc, question, index) => {
                        acc[question.id] = fetchedAnswers[index] || 0;
                        return acc;
                    },
                    {} as { [key: number]: number },
                );

                setAnswers(initialAnswersObject);
            } catch (error) {
                console.error("Failed to fetch initial answers:", error);
            }
        };

        fetchInitialAnswers();
    }, []);

    const handleAnswerChange = (questionId: number, value: number) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: value,
        }));
    };

    const submitAnswersToBackend = async () => {
        // answers 객체를 배열로 변환하여 순서대로 값만 전송
        const answerArray = questions.map((question) => answers[question.id] || 0);

        try {
            const response = await saveSurveyResult(answerArray);
            console.log("Answers submitted successfully:", response.message);
        } catch (error) {
            console.error("Failed to submit answers:", error);
        }
    };

    return (
        <Styles.Container>
            <Styles.FixedHeader>
                <PageBar pageName="문진표 작성" />
            </Styles.FixedHeader>

            <Styles.QuestionsContainer>
                {questions.map((question, index) => (
                    <Styles.QuestionWrapper key={question.id}>
                        <Text size="s" weight="bold">
                            {question.text}
                        </Text>
                        <CheckBar
                            value={answers[question.id] || initialAnswers[index] || 0} // 초기값 0
                            onChange={(value) => handleAnswerChange(question.id, value)}
                        />
                    </Styles.QuestionWrapper>
                ))}
            </Styles.QuestionsContainer>

            <Button variant="tertiary" width="152px" height="100px" onClick={submitAnswersToBackend}>
                제출하기
            </Button>
        </Styles.Container>
    );
};
