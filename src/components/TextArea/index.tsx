import React, { forwardRef } from "react";

import * as Styles from "./index.style";

export interface TextAreaProps extends React.ComponentProps<"textarea"> {
    variant: "primary" | "secondary";

    width?: string;
    height?: string;
    readOnly?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ width, height, variant, placeholder, readOnly, children }, ref) => {
        return (
            <Styles.TextAreaElement
                ref={ref}
                width={width}
                height={height}
                variant={variant}
                placeholder={placeholder}
                readOnly={readOnly}
            >
                {children}
            </Styles.TextAreaElement>
        );
    },
);
