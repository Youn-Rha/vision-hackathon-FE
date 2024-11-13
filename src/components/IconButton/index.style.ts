import styled from "@emotion/styled";

export const ButtonElement = styled.button<{ onClick?: () => void }>`
    width: 40px;
    height: 40px;

    background-color: var(--color-white);

    border-radius: 15px;
    border: none;

    &:hover {
        cursor: pointer;
    }
`;

export const IconElement = styled.img`
    width: 100%;
    height: 100%;
`;
