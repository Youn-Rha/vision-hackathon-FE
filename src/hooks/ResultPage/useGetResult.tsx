import { useState, useEffect } from "react";
import { getGeminiSelfTest } from "@/apis/chatbot/chatbot";

export const useGetResult = () => {
    const [data, setData] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const result = await getGeminiSelfTest();
                setData(result.response);
            } catch (error) {
                console.error("Failed to fetch data:", error);
                setError("Failed to fetch data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};