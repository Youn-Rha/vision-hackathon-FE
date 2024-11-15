import styled from "@emotion/styled";

export const Container = styled.div`
    max-width: 440px;
    height: min(100vh, 956px);
    margin: 0 auto;

    background-color: var(--color-primary);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const Wrapper = styled.div`
    margin-top: 188px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 120px;
`;
