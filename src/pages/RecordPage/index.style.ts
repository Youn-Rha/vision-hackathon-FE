import styled from "@emotion/styled";

import leftArrow from "@/assets/leftArrow.png";
import rightArrow from "@/assets/rightArrow.png";

export const Container = styled.div`
    max-width: 440px;
    height: min(100vh, 956px);
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 30px;

    padding: 100px 0 30px 0;
`;

export const DateContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const ArrowButton = styled.button<{ direction: "left" | "right" }>`
    width: 24px;
    height: 24px;

    font-size: 24px;
    color: black;

    border: none;
    padding: 5px;

    background-color: transparent;
    background-image: url(${(props) => (props.direction === "left" ? leftArrow : rightArrow)});

    &:hover {
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`;

export const DateText = styled.span`
    font-size: var(--font-size-l);
    font-weight: bold;
`;

export const Tabs = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 30px;
`;

export const Tab = styled.button<{ active: boolean }>`
    font-size: var(--font-size-m);
    font-weight: bold;
    background-color: transparent;

    color: ${(props) => (props.active ? "var(--color-black)" : "var(--color-gray)")};
    border-bottom: ${(props) => (props.active ? "3px solid var(--color-primary)" : "2px solid var(--color-gray)")};

    &:focus {
        outline: none;
    }
    cursor: pointer;
`;

export const TabContent = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;
`;

export const TextContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 10px;
`;

export const ChatContainer = styled.div`
    width: 100%;
    flex: 1;
    padding: 10px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    overflow-y: scroll;
`;

export const MessageWrapper = styled.div<{ variant: "AI" | "USER" }>`
    display: flex;

    justify-content: ${(props) => (props.variant === "USER" ? "flex-end" : "flex-start")};
`;

export const FixedHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;
