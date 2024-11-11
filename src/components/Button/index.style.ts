import { ButtonProps } from ".";

import styled from "@emotion/styled";

export const ButtonElement = styled.button<ButtonProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    font-size: 18px;

    border-radius: ${(props) => {
        switch (props.variant) {
            case "primary":
                return "40px";
            case "secondary":
                return "40px";
            case "tertiary":
                return "40px";
            case "login":
                return "15px";
            case "rectangle":
                return "15px";
            default:
                return "40px";
        }
    }};

    background-color: ${(props) => {
        switch (props.variant) {
            case "primary":
                return "var(--color-primary)";
            case "secondary":
                return "#fff";
            case "tertiary":
                return "var(--color-secondary)";
            case "login":
                return "#FDE500";
            case "rectangle":
                return "var(--color-primary)";
        }
    }};

    color: ${(props) => {
        switch (props.variant) {
            case "primary":
                return "#fff";
            case "secondary":
                return "var(--color-primary)";
            case "tertiary":
                return "#000000";
            case "login":
                return "#000000";
            case "rectangle":
                return "#fff";
        }
    }};

    border: 0;

    &:hover {
        cursor: pointer;
    }
`;
