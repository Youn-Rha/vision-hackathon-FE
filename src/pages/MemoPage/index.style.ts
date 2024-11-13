import styled from "@emotion/styled";
import { Text } from "../../components/Text";

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    height: 100vh;
    margin: 0 auto;
    gap: 30px;
`;

export const UpWrapper = styled.div`
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 3px solid var(--color-primary);
`;

export const Header = styled.div`
    width: 100%;
    padding: 10px 0;
`;

export const SelectWrapper = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-bottom: 10px;
`;

export const Select = styled.select`
    padding: 5px 10px;
    font-size: 16px;
    border: 1px solid var(--color-gray);
    border-radius: 4px;
    background-color: #ffffff;
    color: #333;

    &:focus {
        outline: none;
        border-color: var(--color-primary);
    }
`;

export const DateText = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

export const Calendar = styled.div`
    display: flex;
    overflow-x: auto;
    gap: 20px;
    padding: 10px;
    scroll-snap-type: x mandatory;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const DateItem = styled.div<{ isSelected: boolean; isToday: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    color: ${({ isSelected }) => (isSelected ? "#ffffff" : "#333")};
    background-color: ${({ isSelected, isToday }) =>
        isSelected ? "#4caf50" : isToday ? "#e0e0e0" : "transparent"};
    border-radius: 20px;
    padding: 5px 10px;
    min-width: 60px;
    height: 80px;
    scroll-snap-align: start;

    .memo-count {
        font-size: 10px;
        color: ${({ isSelected }) => (isSelected ? "#ffffff" : "gray")};
    }
`;

export const SelectedDate = styled.div`
    width: 100%;
    margin-top: 20px;
    text-align: left;
`;

export const DayCounter = styled.div`
    font-size: 14px;
    color: gray;
    margin-bottom: 20px;
`;

export const MemoTitle = styled(Text)`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-left: 20px;
`;

export const MemosContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const MemoItem = styled.div`
    padding: 10px;
    border-radius: 8px;
    background-color: #e0e0e0;
    font-size: 14px;
    line-height: 1.4;
`;

export const AddButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const AddButton = styled.button`
    font-size: 40px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #4caf50;
    color: #ffffff;
    
    border-radius: 30px;
    width: 70px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #45a049;
    }

    &:active {
        background-color: #388e3c;
    }
`;

export const PopUpContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const PopUpWrapper = styled.div`
    background-color: white;
    padding: 20px;
    width: 90%;
    max-width: 400px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const PopUpTitle = styled.h2`
    margin: 0;
    font-size: 18px;
    font-weight: bold;
`;

export const InputContainer = styled.textarea`
    width: 100%;
    height: 100px;
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    resize: none;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`;