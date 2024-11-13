import React, { useState, useRef, useCallback, useEffect } from "react";
import { Button } from "../../components/Button";
import * as Styles from "./index.style";
import { PageBar } from "../../components/PageBar";

interface Memo {
    date: string;
    content: string;
}

export const MemoPage = (): JSX.Element => {
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
    const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth() + 1);
    const [memos, setMemos] = useState<Memo[]>([
        {
            date: "2024-11-13",
            content: "오늘 건물에서 나오자마자 신호등 신호가 바뀌어서 바로 건널 수 있어 기분이 좋았어요",
        },
        { date: "2024-11-13", content: "오늘은 선선한 날씨가 좋아서 짧은 산책을 함." },
    ]);
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const inputRef = useRef<HTMLTextAreaElement | null>(null);
    const calendarRef = useRef<HTMLDivElement | null>(null);

    // 오늘 날짜를 초기 선택 날짜로 설정
    useEffect(() => {
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;
        setSelectedDate(formattedDate);
        setCurrentYear(currentDate.getFullYear());
        setCurrentMonth(currentDate.getMonth() + 1);

        // 오늘 날짜 기준으로 스크롤 위치 조정
        const todayIndex = currentDate.getDate() - 1;
        if (calendarRef.current) {
            const scrollPosition = todayIndex * 70 - 60; // todayIndex 기준으로 스크롤 위치 계산
            calendarRef.current.scrollLeft = scrollPosition > 0 ? scrollPosition : 0;
        }
    }, []);

    const handlePopUp = useCallback(() => {
        setIsPopUpOpen((prev) => !prev);
    }, []);

    const addMemo = useCallback(async () => {
        if (inputRef.current) {
            const newMemo: Memo = { date: selectedDate, content: inputRef.current.value };
            setMemos((prevMemos) => [...prevMemos, newMemo]);

            try {
                await fetch("/api/memos", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newMemo),
                });
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

    return (
        <Styles.ScreenContainer>
            <PageBar pageName="메모 보기" />
            <Styles.UpWrapper>
                <Styles.Header>
                    <Styles.SelectWrapper>
                        <Styles.Select onChange={(e) => setCurrentYear(Number(e.target.value))} value={currentYear}>
                            {[2023, 2024, 2025].map((year) => (
                                <option key={year} value={year}>
                                    {year}년
                                </option>
                            ))}
                        </Styles.Select>
                        <Styles.Select onChange={(e) => setCurrentMonth(Number(e.target.value))} value={currentMonth}>
                            {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                                <option key={month} value={month}>
                                    {month}월
                                </option>
                            ))}
                        </Styles.Select>
                    </Styles.SelectWrapper>
                </Styles.Header>

                <Styles.Calendar ref={calendarRef}>
                    {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                        const date = `${currentYear}-${String(currentMonth).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                        return (
                            <Styles.DateItem
                                key={day}
                                onClick={() => setSelectedDate(date)}
                                isSelected={selectedDate === date}
                                isToday={selectedDate === date}
                            >
                                <span>{day}일</span>
                                <span className="memo-count">
                                    {memos.filter((memo) => memo.date === date).length}
                                </span>
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
                {memos.filter((memo) => memo.date === selectedDate).map((memo, index) => (
                    <Styles.MemoItem key={index}>{memo.content}</Styles.MemoItem>
                ))}
            </Styles.MemosContainer>

            <Styles.AddButtonWrapper>
                <Styles.AddButton onClick={handlePopUp}>+</Styles.AddButton>
            </Styles.AddButtonWrapper>

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