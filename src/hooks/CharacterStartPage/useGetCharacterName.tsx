import { useEffect, useState, useCallback } from "react";

import { getPetInfo } from "@/apis/pet/pet";

export const useGetCharacterName = () => {
    const [data, setData] = useState("");

    const fetchData = useCallback(async () => {
        const response = await getPetInfo();
        setData(response.name);
        console.log("응답:", response);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data };
};
