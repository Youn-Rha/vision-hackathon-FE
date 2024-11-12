import { TempProps } from ".";

import styled from "@emotion/styled";

export const TempElement = styled.div<TempProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    background-color: var(--color-gray);

    border: 0;
    border-radius: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
`;
