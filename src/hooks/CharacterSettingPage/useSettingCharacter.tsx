import { useState } from "react";
import { acquirePet, updatePetName } from "@/apis/pet/pet";

export const useSettingCharacter = (type: "new" | "edit") => {
    const [characterName, setCharacterName] = useState<string>("character");
    const [message, setMessage] = useState<string>("");

    const handleCharacterName = async (name: string) => {
        try {
            // `type`에 따라 호출할 API 함수 선택
            const apiCall = type === "new" ? acquirePet : updatePetName;
            const response = await apiCall(name);

            // 이름과 성공 메시지 업데이트
            setCharacterName(name);
            const successMessage = response.message || "Operation succeeded";
            setMessage(successMessage);

            console.log("응답:", successMessage);
        } catch (error) {
            // 에러 메시지 업데이트
            const errorMessage =
                (error as { response?: { data?: { detail?: string } } }).response?.data?.detail ||
                "An unknown error occurred";
            setMessage(errorMessage);

            console.error("Pet name change failed:", errorMessage);
        }
    };

    return { characterName, message, setCharacterName, handleCharacterName };
};