import { useEffect, useState, useCallback } from "react";
import { getPetInfo } from "@/apis/pet/pet";

export const useGetCharacter = () => {
    const [data, setData] = useState({ name: "", level: 0, experience: 0 });

    const fetchData = useCallback(async () => {
        const response = await getPetInfo();
        setData(response);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { ...data, refetch: fetchData };
};
