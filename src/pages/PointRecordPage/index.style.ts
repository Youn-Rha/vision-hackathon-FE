import styled from "@emotion/styled";

export const Container = styled.div`
    max-width: 400px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 20px;

    padding-top: 60px;
`;

export const FixedHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const RecordContainer = styled.div`
    width: 100%;

    background-color: var(--color-secondary);
    padding: 10px;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;

    overflow-y: auto; /* 세로 스크롤 생성 */
`;
