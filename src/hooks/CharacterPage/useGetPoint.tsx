import { useCallback, useEffect, useState } from "react";

import { getPoint } from "@/apis/point/point";

export const useGetPoint = () => {
    const [data, setData] = useState({ point: 0 });

    const fetchData = useCallback(async () => {
        const response = await getPoint();
        setData(response);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    return { ...data, pointRefetch: fetchData };
};
