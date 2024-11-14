import { useState } from "react";

import { acquirePet } from "@/apis/pet/pet";

export const useSettingCharacter = () => {
    const [message, setMessage] = useState("");

    const handleCharacterName = async (name: string) => {
        try {
            const response = await acquirePet(name);
            setMessage(response.message); // 성공 응답의 message 설정

            console.log("응답:", response.message);
        } catch (error) {
            // 에러 응답의 detail 설정
            const errorMessage = (error as { response?: { data?: { detail?: string } } }).response?.data?.detail || "An unknown error occurred";
            setMessage(errorMessage);

            console.error("Pet name change failed:", errorMessage);
        }
    };

    return { message, handleCharacterName };
};
