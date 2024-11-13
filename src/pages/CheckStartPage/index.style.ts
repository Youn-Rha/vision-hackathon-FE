import styled from "@emotion/styled";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    max-width: 400px;
    height: 100vh;
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
    margin-top: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 120px;
`;
