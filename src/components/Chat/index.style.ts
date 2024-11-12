import styled from "@emotion/styled";

export const ChatContainer = styled.div`
    width: fit-content;
    display: flex;
    
    position: relative;
`;

export const ChatText = styled.p<{ variant: "AI" | "USER" }>`
    max-width: 300px;
    padding: 15px;

    background-color: ${(props) => (props.variant === "AI" ? "var(--color-lightgray)" : "var(--color-primary)")};
    border-radius: 20px;

    position: relative;
    z-index: 1;

    white-space: normal;
    word-break: break-word;
`;

export const LeftTail = styled.div`
    width: 0;
    height: 0;

    border-top: 20px solid var(--color-lightgray);
    border-bottom: 20px solid transparent;
    border-left: 20px solid transparent;
    border-right: 20px solid var(--color-lightgray);

    position: absolute;
    left: -10px;
`;

export const RightTail = styled.div`
    width: 0;
    height: 0;

    border-top: 20px solid var(--color-primary);
    border-bottom: 20px solid transparent;
    border-left: 20px solid var(--color-primary);
    border-right: 20px solid transparent;

    position: absolute;
    right: -10px;
`;
