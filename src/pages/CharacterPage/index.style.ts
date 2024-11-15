import styled from "@emotion/styled";

import logoImg from "@/assets/logo/logo.png";

export const Container = styled.div`
    max-width: 400px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 60px;
`;

export const Header = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.button`
    width: 160px;
    height: 60px;

    background-color: var(--color-white);
    border-radius: 15px;
    border: 0;
    outline: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(${logoImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    font-size: var(--font-size-l);
    font-weight: bold;

    &:focus {
        outline: none;
    }
    &:hover {
        cursor: pointer;
    }
`;

export const CharacterItem = styled.div`
    width: 100%;
    position: relative; /* 자식 요소들 위치 고정을 위한 상대 위치 */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    & > *:first-child {
        position: absolute;
        top: -30px; /* 상단 텍스트 위치 고정 */
    }

    & > *:last-child {
        position: absolute;
        bottom: -30px; /* 하단 텍스트 위치 고정 */
    }

    padding: 20px;
`;

export const BarContainer = styled.div`
    width: 100%;
    height: fit-content;

    background-color: var(--color-secondary);

    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 15px;
    padding: 30px;
`;

export const ButtonContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;
