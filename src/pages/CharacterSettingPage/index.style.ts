import styled from "@emotion/styled";

export const Container = styled.div`
    max-width: 400px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 50px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const TextItem = styled.div`
    display: flex;
    align-items: center;
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
    height: 280px;

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
    height: 60px;

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
