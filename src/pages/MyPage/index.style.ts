import styled from "@emotion/styled";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 90px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 18px;
`;

export const Divider = styled.div`
    height: 1px;
    background-color: var(--color-lightgray);
    width: 280px;
`;
