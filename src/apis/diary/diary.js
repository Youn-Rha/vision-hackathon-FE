import axiosInstance from "../axiosInstance";

/**
 * 특정 일기 조회 (GET /api/diary/{diaryId})
 * @param {number} diaryId 조회할 일기의 ID
 * @returns {object} { diaryId, writtenDateTime, type, content }
 */
export const getDiaryById = async (diaryId) => {
    const response = await axiosInstance.get(`/api/diary/${diaryId}`);
    return response.data;
};

/**
 * 일기 수정 (PUT /api/diary/{diaryId})
 * @param {number} diaryId 수정할 일기의 ID
 * @param {string} type 일기 유형 ("DAY" 등)
 * @param {string} content 일기 내용
 * @returns {object} { message }
 */
export const updateDiary = async (diaryId, type, content) => {
    const response = await axiosInstance.put(`/api/diary/${diaryId}`, { type, content });
    return response.data;
};

/**
 * 일기 삭제 (DELETE /api/diary/{diaryId})
 * @param {number} diaryId 삭제할 일기의 ID
 * @returns {object} { message }
 */
export const deleteDiary = async (diaryId) => {
    const response = await axiosInstance.delete(`/api/diary/${diaryId}`);
    return response.data;
};

/**
 * 일기 작성 (POST /api/diary)
 * @param {Array} diaries 작성할 일기 목록 [{ type, content }, ...]
 * @returns {object} { message }
 */
export const createDiaries = async (diaries) => {
    const response = await axiosInstance.post("/api/diary", diaries);
    return response.data;
};

/**
 * 날짜별 작성 일기 조회 (GET /api/diary/all/{localDate})
 * @param {string} localDate 조회할 날짜 (YYYY-MM-DD 형식)
 * @returns {Array} [{ diaryId, writtenDateTime, type, content }, ...]
 */
export const getDiariesByDate = async (localDate) => {
    const response = await axiosInstance.get(`/api/diary/all/${localDate}`);
    return response.data;
};
