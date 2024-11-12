import * as Styles from "./index.style";

export interface ChatProps {
    variant: "AI" | "USER";
    children?: React.ReactNode;
}

export const Chat = (props: ChatProps) => {
    return (
        <Styles.ChatContainer>
            {props.variant === "AI" && <Styles.LeftTail />}
            <Styles.ChatText variant={props.variant}>{props.children}</Styles.ChatText>
            {props.variant === "USER" && <Styles.RightTail />}
        </Styles.ChatContainer>
    );
};
