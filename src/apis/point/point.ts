import axiosInstance from "../axiosInstance";

interface Point {
    point: number;
}

interface PointLogEntry {
    receivedDateTime: string;
    type: string;
    status: string;
    receivedPoint: number;
}

/**
 * 포인트 조회 (GET /api/point)
 * @returns {Promise<Point>} { point }
 */
export const getPoint = async (): Promise<Point> => {
    const response = await axiosInstance.get<Point>("/api/point");
    return response.data;
};

/**
 * 포인트 로그 조회 (GET /api/point/log)
 * @returns {Promise<PointLogEntry[]>} 포인트 로그 배열
 */
export const getPointLog = async (): Promise<PointLogEntry[]> => {
    const response = await axiosInstance.get<PointLogEntry[]>("/api/point/log");
    return response.data;
};