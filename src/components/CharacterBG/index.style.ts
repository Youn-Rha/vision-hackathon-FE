import styled from "@emotion/styled";

export const Container = styled.div<{ width: string; height: string }>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    aspect-ratio: 1 / 1;
    background-color: var(--color-lightgray);
    border-radius: 50%;
    box-shadow: 0px 0px 50px -8px var(--color-primary);

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Character = styled.img`
    //width: 80%;
    height: auto;
`;
