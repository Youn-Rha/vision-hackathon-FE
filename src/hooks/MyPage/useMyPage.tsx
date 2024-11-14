import { useState, useEffect } from "react";
import { getUserInfo } from "../../apis/auth/member";

interface UserData {
    name: string;
    email: string;
}

export const useMyPage = () => {
    const [userData, setUserData] = useState<UserData>({ name: "이름", email: "example@co.kr" });
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setLoading(true);
                const data = await getUserInfo();
                setUserData({
                    name: data.name || "이름 없음",
                    email: data.email || "이메일 없음",
                });
            } catch (error) {
                console.log("에러 내용: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUserData();
    }, []);

    return { userData, loading };
};
