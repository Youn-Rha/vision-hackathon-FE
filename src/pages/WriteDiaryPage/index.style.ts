import styled from "@emotion/styled";

export const Container = styled.div`
    max-width: 400px;
    height: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 40px;

    padding: 100px 0 30px 0;

    overflow-y: scroll;
`;

export const FixedHeader = styled.div`
    width: 100%;

    position: fixed;
    top: 0;
    left: 0;
`;

export const TextContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;
`;

export const QContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 10px;
`;
