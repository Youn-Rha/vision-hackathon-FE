import styled from "@emotion/styled";
import { GrowBarProps } from ".";

export const Container = styled.div`
    width: 230px;
    height: 30px;
    display: flex;
`;

export const Wrapper = styled.div`
    width: 180px;
    height: 30px;
    background-color: #ededed;
    border-radius: 19px;
`;

export const Bar = styled.div<GrowBarProps>`
    width: ${({ experience }) => `${experience}%`};
    height: 30px;
    background-color: var(--color-primary);
    border-radius: 19px;
`;
