import styled from "@emotion/styled";

import backArrow from "../../assets/backarrow.png";

export const Container = styled.div`
    height: 70px;
    width: 440px;
    margin: 0 auto;

    background-color: var(--color-white);
    border-bottom-style: solid;
    border-bottom-width: 3px;
    border-color: var(--color-primary);
    box-shadow: 0px 4px 4px #00000040;
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
`;
export const Arrow = styled.button`
    height: 20px;
    width: 10px;
    margin-left: 20px;

    background-image: url(${backArrow});
    background-image: url(${backArrow});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    background-color: transparent;

    outline: none;
    border: none;
    cursor: pointer;
`;
