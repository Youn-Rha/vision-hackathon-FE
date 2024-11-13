import styled from "@emotion/styled";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 40px;
`;

export const Header = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.div`
    width: 175px;
    height: 60px;

    background-color: var(--color-gray);
    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: var(--font-size-l);
    font-weight: bold;
`;

export const HeaderIcons = styled.div`
    width: 35%;

    display: flex;
    align-items: center;
    gap: 10px;
`;

export const QContainer = styled.div`
    width: 100%;
    height: 200px;

    background-color: var(--color-secondary);

    border-radius: 15px;

    display: flex;
    flex-direction: column;

    padding: 30px;
    gap: 40px;

    margin-top: 20px;
`;
