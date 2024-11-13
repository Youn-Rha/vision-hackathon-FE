import React, { useState, useRef, useCallback } from "react";
import * as Styles from "./index.style";
import { Button } from "../../components/Button";

interface Memo {
  date: string;
  content: string;
}

export const MemoPage = (): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState<string>("2024-12-09");
  const [memos, setMemos] = useState<Memo[]>([
    { date: "2024-12-09", content: "오늘 건물에서 나오자마자 신호등 신호가 바뀌어서 바로 건널 수 있어 기분이 좋았어요" },
    { date: "2024-12-09", content: "오늘은 선선한 날씨가 좋아서 짧은 산책을 함." },
  ]);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const filteredMemos = memos.filter((memo) => memo.date === selectedDate);

  // 팝업 열기/닫기 함수
  const handlePopUp = useCallback(() => {
    setIsPopUpOpen((prev) => !prev);
  }, []);

  // 메모 추가 및 백엔드 전송 함수
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

      // 팝업 닫기
      handlePopUp();
    }
  }, [selectedDate, handlePopUp]);

  return (
    <Styles.ScreenContainer>
      <Styles.Header>
        <Styles.DateText>2024년 12월</Styles.DateText>
      </Styles.Header>

      <Styles.Calendar>
        {["8", "9", "10", "11", "12"].map((day) => (
          <Styles.DateItem
            key={day}
            onClick={() => setSelectedDate(`2024-12-${day.padStart(2, "0")}`)}
            isSelected={selectedDate === `2024-12-${day.padStart(2, "0")}`}
          >
            <span>{day}일</span>
            <span className="memo-count">
              {memos.filter((memo) => memo.date === `2024-12-${day.padStart(2, "0")}`).length}
            </span>
          </Styles.DateItem>
        ))}
      </Styles.Calendar>

      <Styles.SelectedDate>
        <Styles.DayCounter>DAY 1</Styles.DayCounter>
        <Styles.MemoTitle>메모</Styles.MemoTitle>
      </Styles.SelectedDate>

      <Styles.MemosContainer>
        {filteredMemos.map((memo, index) => (
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
