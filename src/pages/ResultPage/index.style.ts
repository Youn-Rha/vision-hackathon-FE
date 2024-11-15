// index.style.js
import styled from "@emotion/styled";

export const Container = styled.div`
    max-width: 440px;
    height: min(100vh, 956px);
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    padding-bottom: 20px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const ResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    gap: 8px;
`;
