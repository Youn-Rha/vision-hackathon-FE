
import styled from "@emotion/styled";

export const ScreenContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const DateText = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const Calendar = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const DateItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  color: ${({ isSelected }) => (isSelected ? "#ffffff" : "#333")};
  background-color: ${({ isSelected }) => (isSelected ? "#4caf50" : "transparent")};
  border-radius: 20px;
  padding: 5px 10px;
  
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
  margin-bottom: 5px;
`;

export const MemoTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
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
  font-size: 24px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 50%;
  width: 48px;
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
