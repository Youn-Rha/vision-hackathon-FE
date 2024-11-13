import styled from "@emotion/styled";

export const Container = styled.div`
    width: 110px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: transparent;

    gap: 5px;
`;

export const Button = styled.button<{ onClick?: () => void }>`
    width: 100%;
    height: 97px;

    background-color: var(--color-white);

    font-size: var(--font-size-s);
    font-weight: bold;

    border: none;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding: 10px;

    &:hover {
        cursor: pointer;
    }
`;

export const Icon = styled.img`
    width: fit-content;
    height: fit-content;
`;
