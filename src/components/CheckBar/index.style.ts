import styled from "@emotion/styled";

export const Container = styled.div`
    width: 300px;
    height: 20px;
    align-items: center;
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const Slider = styled.input`
    width: 300px;
    height: 4px;
    border-radius: 2px;
    top: 6px;
    -webkit-appearance: none; /* 기본 스타일 제거 */
    appearance: none; /* 모든 브라우저에서 기본 스타일 제거 */
    background: var(--color-gray);

    &:active {
        cursor: grabbing;
    }

    &:focus {
        outline: none;
    }

    /* WebKit 기반 브라우저에서 슬라이더 썸 스타일링 */
    ::-webkit-slider-thumb {
        -webkit-appearance: none; /* 기본 스타일 제거 */
        background: var(--color-primary); /* 원하는 색상으로 설정 */
        width: 16px; /* 썸의 너비 */
        height: 16px; /* 썸의 높이 */
        border-radius: 50%; /* 동그라미 모양 */
        border: 2px solid white; /* 선택 사항: 흰색 테두리 */
    }

    /* Firefox에서 슬라이더 썸 스타일링 */
    &::-moz-range-thumb {
        background: var(--color-primary); /* 원하는 색상으로 설정 */
        width: 16px; /* 썸의 너비 */
        height: 16px; /* 썸의 높이 */
        border-radius: 50%; /* 동그라미 모양 */
        border: 2px solid white; /* 선택 사항: 흰색 테두리 */
    }

    /* Edge 및 기타 브라우저에서 슬라이더 썸 스타일링 */
    &::-ms-thumb {
        background: var(--color-primary); /* 원하는 색상으로 설정 */
        width: 16px; /* 썸의 너비 */
        height: 16px; /* 썸의 높이 */
        border-radius: 50%; /* 동그라미 모양 */
        border: 2px solid white; /* 선택 사항: 흰색 테두리 */
    }
`;
