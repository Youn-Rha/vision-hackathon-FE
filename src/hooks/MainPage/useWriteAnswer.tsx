// import { useState } from "react";
import { useRef } from "react";

import { createResponse } from "@/apis/question/question";

interface AnswerData {
    questionId: number;
    response: string;
}

export const useWriteAnswer = () => {
    const inputRef = useRef<HTMLTextAreaElement | null>(null);

    const handleWriteAnswer = async ({ questionId, response }: AnswerData) => {
        try {
            console.log("useWriteAnswer", questionId);

            await createResponse(questionId, response);
            // setData({ questionId, response });

            // return data;
        } catch (error) {
            console.error("question write failed:", error);
        }
    };

    return { handleWriteAnswer, inputRef };
};
