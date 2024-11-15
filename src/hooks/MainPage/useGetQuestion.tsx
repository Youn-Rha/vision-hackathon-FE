import { useCallback, useEffect, useState } from "react";

import { getRandomQuestion } from "@/apis/question/question";

interface IQuestion {
    id: number;
    question: string;
    AnsweredToday: boolean;
    answer: string;
}

export const useGetQuestion = () => {
    const [data, setData] = useState<IQuestion>({ id: 1, question: "", AnsweredToday: false, answer: "" });

    const fetchData = useCallback(async () => {
        try {
            const response = await getRandomQuestion();
            console.log("API Response:", response);
            setData(response);
        } catch (error) {
            console.error("Error fetching question:", error);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    return { ...data, fetchData };
};
