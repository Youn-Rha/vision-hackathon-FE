import { keyframes, css } from "@emotion/react";
import styled from "@emotion/styled";

// 페이드아웃 애니메이션 정의
const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

// fade prop의 타입 정의
interface ContainerProps {
    fade: boolean;
}

// 애니메이션 스타일이 적용된 컨테이너
export const Container = styled.div<ContainerProps>`
    max-width: 440px;
    height: min(100vh, 956px);
    margin: 0 auto;

    background-color: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;

    /* 페이드아웃 애니메이션을 조건부로 적용 */
    ${({ fade }) =>
        fade &&
        css`
            animation: ${fadeOut} 1s ease forwards;
        `}
`;

export const LogoItem = styled.img`
    width: 230px;
    height: 205px;

    border-radius: 15px;
`;
