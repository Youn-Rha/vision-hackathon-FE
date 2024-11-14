import { useEffect, useState, useCallback } from "react";

import { getPointLog } from "@/apis/point/point";

interface ResponsePointRecord {
    receivedDateTime: string;
    type:
        | "ATTENDANCE_DAY_1"
        | "ATTENDANCE_DAY_2"
        | "ATTENDANCE_DAY_3"
        | "ATTENDANCE_DAY_4"
        | "ATTENDANCE_DAY_5_OR_MORE"
        | "DAILY_RESPONSE"
        | "DIARY"
        | "GROWTH_WATER"
        | "GROWTH_SUN"
        | "GROWTH_NUTRIENT"
        | "CHAT_BOT";
    status: string;
    receivedPoint: number;
}

export const useGetPointRecord = () => {
    const [data, setData] = useState<ResponsePointRecord[]>([]);

    const fetchData = useCallback(async () => {
        const response = await getPointLog();

        const formattedResponse: ResponsePointRecord[] = response.map((entry) => ({
            ...entry,
            type: entry.type as ResponsePointRecord["type"],
        }));

        setData(formattedResponse);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data };
};
