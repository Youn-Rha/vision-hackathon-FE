import axiosInstance from "../axiosInstance";

interface DiaryEntry {
    diaryId: number;
    writtenDateTime: string;
    type: string;
    content: string;
}

/**
 * 특정 일기 조회 (GET /api/diary/{diaryId})
 * @param diaryId 조회할 일기의 ID
 * @returns {Promise<DiaryEntry>} 일기 엔트리
 */
export const getDiaryById = async (diaryId: number): Promise<DiaryEntry> => {
    const response = await axiosInstance.get<DiaryEntry>(`/api/diary/${diaryId}`);
    return response.data;
};

/**
 * 일기 수정 (PUT /api/diary/{diaryId})
 * @param diaryId 수정할 일기의 ID
 * @param type 일기 유형 ("DAY" 등)
 * @param content 일기 내용
 * @returns {Promise<{ message: string }>} 수정 성공 메시지
 */
export const updateDiary = async (diaryId: number, type: string, content: string): Promise<{ message: string }> => {
    const response = await axiosInstance.put<{ message: string }>(`/api/diary/${diaryId}`, { type, content });
    return response.data;
};

/**
 * 일기 삭제 (DELETE /api/diary/{diaryId})
 * @param diaryId 삭제할 일기의 ID
 * @returns {Promise<{ message: string }>} 삭제 성공 메시지
 */
export const deleteDiary = async (diaryId: number): Promise<{ message: string }> => {
    const response = await axiosInstance.delete<{ message: string }>(`/api/diary/${diaryId}`);
    return response.data;
};

/**
 * 일기 작성 (POST /api/diary)
 * @param diaries 작성할 일기 목록
 * @returns {Promise<{ message: string }>} 작성 성공 메시지
 */
export const createDiaries = async (
    diaries: { type: "DAY" | "EMOTION" | "MEMO"; content: string }[],
): Promise<{ message: string }> => {
    const response = await axiosInstance.post<{ message: string }>("/api/diary", diaries);
    return response.data;
};

/**
 * 날짜별 작성 일기 조회 (GET /api/diary/all/{localDate})
 * @param localDate 조회할 날짜 (YYYY-MM-DD 형식)
 * @returns {Promise<DiaryEntry[]>} 일기 목록 배열
 */
export const getDiariesByDate = async (localDate: string): Promise<DiaryEntry[]> => {
    const response = await axiosInstance.get<DiaryEntry[]>(`/api/diary/all/${localDate}`);
    return response.data;
};
