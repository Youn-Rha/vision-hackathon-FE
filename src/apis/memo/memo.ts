import axiosInstance from "../axiosInstance";

interface UpdateMemoResponse {
    message: string;
}

/**
 * 메모 수정 (PUT /api/memo/{memoId})
 * @param memoId 수정할 메모의 ID
 * @param content 수정할 메모의 내용
 * @returns {Promise<UpdateMemoResponse>} 성공 메시지를 포함한 응답
 */
export const updateMemo = async (memoId: number, content: string): Promise<UpdateMemoResponse> => {
    const response = await axiosInstance.put<UpdateMemoResponse>(`/api/memo/${memoId}`, { content });
    return response.data;
};

interface DeleteMemoResponse {
    message: string;
}

/**
 * 메모 삭제 (DELETE /api/memo/{memoId})
 * @param memoId 삭제할 메모의 ID
 * @returns {Promise<DeleteMemoResponse>} 성공 메시지를 포함한 응답
 */
export const deleteMemo = async (memoId: number): Promise<DeleteMemoResponse> => {
    const response = await axiosInstance.delete<DeleteMemoResponse>(`/api/memo/${memoId}`);
    return response.data;
};

interface CreateMemoResponse {
    message: string;
}

/**
 * 메모 작성 (POST /api/memo)
 * @param content 작성할 메모 내용
 * @returns {Promise<CreateMemoResponse>} 성공 메시지를 포함한 응답
 */
export const createMemo = async (content: string): Promise<CreateMemoResponse> => {
    const response = await axiosInstance.post<CreateMemoResponse>("/api/memo", { content });
    return response.data;
};

interface Memo {
    diaryId: number;
    writtenDateTime: string;
    content: string;
}

/**
 * 특정 날짜의 메모 가져오기 (GET /api/memo/{localDateTime})
 * @param localDateTime 가져올 메모의 날짜 (YYYY-MM-DDTHH:mm:ss 형식)
 * @returns {Promise<Memo[]>} 해당 날짜의 메모 배열
 */
export const getMemosByDate = async (localDateTime: string): Promise<Memo[]> => {
    const response = await axiosInstance.get<Memo[]>(`/api/memo/${localDateTime}`);
    console.log(response);
    return response.data;
};
