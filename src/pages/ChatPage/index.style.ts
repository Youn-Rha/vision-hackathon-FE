import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Container = styled.div`
    max-width: 400px;
    height: 100vh;
    margin: 0 auto;

    padding: 100px 0 30px 0;
    display: flex;
    flex-direction: column;
`;

export const FixedHeader = styled.div`
    width: 100%;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 10;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const ChatContainer = styled.div`
    flex: 1;
    padding: 10px;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    gap: 25px;

    & > div {
        animation: ${fadeIn} 0.5s ease-in-out;
    }
`;

export const InputContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const MessageWrapper = styled.div<{ variant: "AI" | "USER" }>`
    display: flex;
    justify-content: ${(props) => (props.variant === "USER" ? "flex-end" : "flex-start")};
`;
