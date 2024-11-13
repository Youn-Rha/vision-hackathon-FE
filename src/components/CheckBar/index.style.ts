import styled from "@emotion/styled";

export const Container = styled.div`
    width: 300px;
    position: relative;
    height: 40px;
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const Slider = styled.input`
    width: 100%;
    height: 4px;
    border-radius: 2px;
    -webkit-appearance: none;
    appearance: none;
    background: linear-gradient(
        to right,
        var(--color-primary) 0%,
        var(--color-primary) 2%,
        var(--color-gray) 2%,
        var(--color-gray) 32.3%,
        var(--color-primary) 32.3%,
        var(--color-primary) 34.3%,
        var(--color-gray) 34.3%,
        var(--color-gray) 64.6%,
        var(--color-primary) 64.6%,
        var(--color-primary) 66.6%,
        var(--color-gray) 66.6%,
        var(--color-gray) 98%,
        var(--color-primary) 98%,
        var(--color-primary) 100%
    );

    &:active {
        cursor: grabbing;
    }

    &:focus {
        outline: none;
    }

    /* 슬라이더 썸 스타일 */
    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: var(--color-primary);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 2px solid white;
        cursor: pointer;
    }

    &::-moz-range-thumb {
        background: var(--color-primary);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 2px solid white;
        cursor: pointer;
    }

    &::-ms-thumb {
        background: var(--color-primary);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 2px solid white;
        cursor: pointer;
    }
`;