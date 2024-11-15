import React, { forwardRef } from "react";

import * as Styles from "./index.style";

export interface TextAreaProps extends React.ComponentProps<"textarea"> {
    variant: "primary" | "secondary";

    width?: string;
    height?: string;
    readOnly?: boolean;
    value?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ width, height, variant, placeholder, readOnly, value, children }, ref) => {
        return (
            <Styles.TextAreaElement
                ref={ref}
                width={width}
                height={height}
                variant={variant}
                placeholder={placeholder}
                readOnly={readOnly}
                value={value}
            >
                {children}
            </Styles.TextAreaElement>
        );
    },
);
