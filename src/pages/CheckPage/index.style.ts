import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
`;

export const FixedHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const QuestionsContainer = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 60px auto 0px;
    padding: 20px 20px 60px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    overflow-y: auto;
`;

export const QuestionWrapper = styled.div`
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const FixedFooter = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    /* background-color: var(--color-white); */
    padding: 4px 20px 12px;
    display: flex;
    justify-content: center;
    z-index: 10;
`;