import { TextAreaProps } from ".";

import styled from "@emotion/styled";

export const TextAreaElement = styled.textarea<TextAreaProps>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};

    background-color: ${(props) => {
        switch (props.variant) {
            case "primary":
                return "var(--color-lightgray)";
            case "secondary":
                return "var(--color-gray)";
        }
    }};

    font-size: 16px;

    border: none;
    border-radius: 15px;
    padding: 10px;

    resize: none;
    line-height: 200%;

    &:focus {
        outline: none;
    }
`;
