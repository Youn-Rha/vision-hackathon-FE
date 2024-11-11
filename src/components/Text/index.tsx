import { forwardRef } from "react";

import * as Styles from "./index.style";

export interface TextProps extends React.ComponentProps<"span"> {
    children?: React.ReactNode;
    size?: "xl" | "l" | "m" | "s" | "xs" | string;
    weight?: "normal" | "bold";
    color?: "primary" | "secondary" | "gray" | "white" | "black" | string;
}

export const Text = forwardRef<HTMLSpanElement, TextProps>(({ children, ...rest }, ref) => {
    return (
        <Styles.TextElement ref={ref} {...rest}>
            {children}
        </Styles.TextElement>
    );
});
