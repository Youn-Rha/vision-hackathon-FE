import styled from "@emotion/styled";

import { GrowBarProps } from "./index";

export const Container = styled.div`
    width: 230px;
    height: 30px;
    align-items: center;
    gap: 10px;
    display: flex;
`;

export const Wrapper = styled.div`
    width: 180px;
    height: 30px;
    background-color: var(--color-lightgray);
    border-radius: 19px;
`;

export const Bar = styled.div<GrowBarProps>`
    width: ${({ experience }) => `${experience}%`};
    height: 30px;
    background-color: var(--color-primary);
    border-radius: 19px;
`;
