import { useRef } from "react";

import { createDiaries } from "@/apis/diary/diary";

export const useWriteDiary = () => {
    const answer1Ref = useRef<HTMLTextAreaElement>(null);
    const answer2Ref = useRef<HTMLTextAreaElement>(null);
    const answer3Ref = useRef<HTMLTextAreaElement>(null);

    const handleWriteDiary = async (entries: Array<{ type: "DAY" | "EMOTION" | "MEMO"; content: string }>) => {
        try {
            await createDiaries(entries);
        } catch (error) {
            const errorMessage =
                (error as { response?: { data?: { detail?: string } } }).response?.data?.detail ||
                "An unknown error occurred";
            console.error("Diary creation failed:", errorMessage);
        }
    };

    return { answer1Ref, answer2Ref, answer3Ref, handleWriteDiary };
};
