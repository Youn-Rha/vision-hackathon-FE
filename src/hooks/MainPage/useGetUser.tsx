import { useCallback, useEffect, useState } from "react";

import { getUserInfo } from "@/apis/auth/member";

export const useGetUser = () => {
    const [data, setData] = useState("");

    const fetchData = useCallback(async () => {
        const response = await getUserInfo();
        setData(response.name);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    return { data };
};
