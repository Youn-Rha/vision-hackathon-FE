import { TempProps } from ".";

import styled from "@emotion/styled";

export const TempElement = styled.button<TempProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    background-color: var(--color-white);

    border: 0;
    border-radius: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TempImg = styled.img`
    width: 100%;
`;
