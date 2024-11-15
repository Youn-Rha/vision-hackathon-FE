import { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { PageBar } from "../../components/PageBar";
import * as Styles from "./index.style";
import { createMemo, getMemosByDate } from "@/apis/memo/memo";

interface Memo {
    date: string;
    timestamp: string; // 소수점 없는 ISO 형식의 timestamp
    content: string;
}

export const MemoPage = (): JSX.Element => {
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
    const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth() + 1);
    const [memos, setMemos] = useState<Memo[]>([]); // 모든 메모를 저장할 상태
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const inputRef = useRef<HTMLTextAreaElement | null>(null);
    const calendarRef = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate();

    // 오늘 날짜를 한국 시간대로 가져오기
    const today = new Date(new Date().getTime() + 9 * 60 * 60 * 1000).toISOString().split("T")[0];

    useEffect(() => {
        const fetchMemosForMonth = async () => {
            // const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
            const monthMemos: Memo[] = [];
            const todayDay = new Date(new Date().getTime() + 9 * 60 * 60 * 1000).getDate();

            for (let day = todayDay - 5; day <= todayDay; day++) {
                const date = `${currentYear}-${String(currentMonth).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                const localDate = new Date(`${date}T00:00:00+09:00`); // 한국 시간대 적용
                const timestamp = localDate.toISOString().split(".")[0];

                try {
                    const fetchedMemos = await getMemosByDate(timestamp);
                    fetchedMemos.forEach((memo) => {
                        monthMemos.push({
                            date: memo.writtenDateTime.split("T")[0],
                            timestamp: memo.writtenDateTime.split(".")[0],
                            content: memo.content,
                        });
                    });
                } catch (error) {
                    console.error(`Failed to fetch memos for ${date}:`, error);
                }
            }

            setMemos(monthMemos);
        };

        fetchMemosForMonth();
    }, [currentYear, currentMonth]);

    // 오늘 날짜 설정 및 캘린더 위치 조정
    useEffect(() => {
        const currentDate = new Date(new Date().getTime() + 9 * 60 * 60 * 1000);
        const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;
        setSelectedDate(formattedDate);

        // 오늘 날짜 기준으로 스크롤 위치 조정
        const todayIndex = currentDate.getDate() - 1;
        if (calendarRef.current) {
            const scrollPosition = todayIndex * 70 - 60;
            calendarRef.current.scrollLeft = scrollPosition > 0 ? scrollPosition : 0;
        }
    }, []);

    const handlePopUp = useCallback(() => {
        setIsPopUpOpen((prev) => !prev);
    }, []);

    const addMemo = useCallback(async () => {
        if (inputRef.current) {
            const content = inputRef.current.value;

            // 한국 시간대에 맞춰 timestamp 생성
            const now = new Date(new Date().getTime() + 9 * 60 * 60 * 1000);
            const newTimestamp = now.toISOString().slice(0, 19); // 소수점 이하 제외

            const newMemo = { date: selectedDate, timestamp: newTimestamp, content };
            setMemos((prevMemos) => [...prevMemos, newMemo]);

            try {
                await createMemo(content);
            } catch (error) {
                console.error("Failed to save memo:", error);
            }

            handlePopUp();
        }
    }, [selectedDate, handlePopUp]);

    const getDaysInMonth = (year: number, month: number) => {
        return new Date(year, month, 0).getDate();
    };

    const daysInMonth = getDaysInMonth(currentYear, currentMonth);

    const handleBackArrow = () => {
        navigate("/main");
    };

    return (
        <Styles.ScreenContainer>
            <PageBar pageName="메모 보기" onClick={handleBackArrow} />
            <Styles.UpWrapper>
                <Styles.Header>
                    <Styles.SelectWrapper>
                        <Styles.Select onChange={(e) => setCurrentYear(Number(e.target.value))} value={currentYear}>
                            {[2023, 2024, 2025].map((year) => (
                                <Styles.Option key={year} value={year}>
                                    {year}년
                                </Styles.Option>
                            ))}
                        </Styles.Select>
                        <Styles.Select onChange={(e) => setCurrentMonth(Number(e.target.value))} value={currentMonth}>
                            {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                                <Styles.Option key={month} value={month}>
                                    {month}월
                                </Styles.Option>
                            ))}
                        </Styles.Select>
                    </Styles.SelectWrapper>
                </Styles.Header>

                <Styles.Calendar ref={calendarRef}>
                    {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                        const date = `${currentYear}-${String(currentMonth).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                        const memoCount = memos.filter((memo) => memo.date === date).length;

                        return (
                            <Styles.DateItem
                                key={day}
                                onClick={() => setSelectedDate(date)}
                                isSelected={selectedDate === date}
                                isToday={date === today}
                            >
                                <span>{day}일</span>
                                <span className="memo-count">{memoCount}</span>
                            </Styles.DateItem>
                        );
                    })}
                </Styles.Calendar>
            </Styles.UpWrapper>

            <Styles.SelectedDate>
                <Styles.DayCounter>DAY 1</Styles.DayCounter>
                <Styles.MemoTitle>메모</Styles.MemoTitle>
            </Styles.SelectedDate>

            <Styles.MemosContainer>
                {memos
                    .filter((memo) => memo.date === selectedDate)
                    .map((memo, index) => (
                        <Styles.MemoItem key={index}>{memo.content}</Styles.MemoItem>
                    ))}
            </Styles.MemosContainer>

            {/* 오늘 날짜인 경우에만 추가 버튼 표시 */}
            {selectedDate === today && (
                <Styles.AddButtonWrapper>
                    <Styles.AddButton onClick={handlePopUp}>+</Styles.AddButton>
                </Styles.AddButtonWrapper>
            )}

            {isPopUpOpen && (
                <Styles.PopUpContainer>
                    <Styles.PopUpWrapper>
                        <Styles.PopUpTitle>메모 추가</Styles.PopUpTitle>
                        <Styles.InputContainer ref={inputRef} placeholder="메모 내용을 입력하세요..." />
                        <Styles.ButtonContainer>
                            <Button variant="rectangle" width="48%" height="50px" onClick={handlePopUp}>
                                취소
                            </Button>
                            <Button variant="rectangle" width="48%" height="50px" onClick={addMemo}>
                                저장
                            </Button>
                        </Styles.ButtonContainer>
                    </Styles.PopUpWrapper>
                </Styles.PopUpContainer>
            )}
        </Styles.ScreenContainer>
    );
};
