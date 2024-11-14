import { useCallback, useEffect, useState } from "react";

import { getRandomQuestion } from "@/apis/question/question";

interface IQuestion {
    id: number;
    question: string;
    AnsweredToday: boolean;
    answer: string;
}

export const useGetQuestion = () => {
    const [data, setData] = useState<IQuestion>({ id: 0, question: "", AnsweredToday: false, answer: "" });

    const fetchData = useCallback(async () => {
        const response = await getRandomQuestion();
        setData(response);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    return { ...data };
};
