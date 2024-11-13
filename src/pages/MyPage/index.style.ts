import styled from "@emotion/styled";

export const Container = styled.div`
    max-width: 400px;
    height: 100vh;
    margin: 0 auto;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 90px;
`;

export const Button = styled.button<{ size: string; color: string }>`
    font-size: ${(props) => props.size};
    font-weight: bold;
    background-color: var(--color-white);
    color: ${(props) => {
        switch (props.color) {
            case "black":
                return "var(--color-black)";
            case "gray":
                return "var(--color-gray)";
        }
    }};
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 18px;
`;

export const Divider = styled.div`
    height: 1px;
    background-color: var(--color-lightgray);
    width: 280px;
`;
