import axiosInstance from "../axiosInstance";

/**
 * 포인트 조회 (GET /api/point)
 * @returns {object} { point }
 */
export const getPoint = async () => {
    const response = await axiosInstance.get("/api/point");
    return response.data;
};

/**
 * 포인트 로그 조회 (GET /api/point/log)
 * @returns {Array} [{ receivedDateTime, type, status, receivedPoint }, ...]
 */
export const getPointLog = async () => {
    const response = await axiosInstance.get("/api/point/log");
    return response.data;
};
