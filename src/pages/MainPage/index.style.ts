import styled from "@emotion/styled";

import logoImg from "@/assets/logo/logo.png";

export const Container = styled.div`
    max-width: 440px;
    height: 100vh;
    margin: 0 auto;

    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;
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

export const HeaderIcons = styled.div`
    width: 48%;

    display: flex;
    align-items: center;
    gap: 10px;
`;

export const QContainer = styled.button`
    width: 100%;
    min-height: 120px;

    background-color: var(--color-secondary);

    border-radius: 15px;

    display: flex;
    flex-direction: column;

    padding: 30px;
    gap: 30px;

    margin-top: 20px;

    border: 0;
    outline: 0;

    cursor: pointer;
`;

export const PopUpContainer = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PopUpWrapper = styled.div`
    width: 380px;
    height: 300px;

    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    padding: 20px;
    border-radius: 15px;

    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const InputContainer = styled.input`
    width: 100%;
    min-height: 100px;

    border: 1px solid var(--color-gray);
    border-radius: 15px;

    padding: 10px;
    font-size: var(--font-size-m);

    outline: none;
    &:focus {
        outline: none;
    }
`;

export const ButtonContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const AnswerContainer = styled.div`
    width: 100%;

    background-color: var(--color-lightgray);
    border-radius: 15px;

    padding: 20px;
`;
