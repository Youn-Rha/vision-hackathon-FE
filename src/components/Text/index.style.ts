import styled from "@emotion/styled";

import { TextProps } from "./index";

export const TextElement = styled.span<TextProps>`
    font-size: ${(props) => {
        switch (props.size) {
            case "xl":
                return "var(--font-size-xl)";
            case "l":
                return "var(--font-size-l)";
            case "m":
                return "var(--font-size-m)";
            case "s":
                return "var(--font-size-s)";
            default:
                return props.size;
        }
    }};

    color: ${(props) => {
        switch (props.color) {
            case "primary":
                return "var(--color-primary)";
            case "secondary":
                return "var(--color-secondary)";
            case "gray":
                return "var(--color-darkgray)";
            case "white":
                return "#fff";
            case "black":
                return "#000000";
            default:
                return props.color;
        }
    }};

    font-weight: ${(props) => {
        switch (props.weight) {
            case "bold":
                return "bold";
            case "normal":
                return "normal";
            default:
                return props.weight;
        }
    }};
`;
