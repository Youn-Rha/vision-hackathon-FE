import styled from "@emotion/styled";

export const Container = styled.div`
    max-width: 400px;
    height: 100vh;
    max-height: 956px;
    margin: 0 auto;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;
`;

export const Button = styled.button<{ size: string; color: string }>`
    font-size: ${(props) => props.size};
    font-weight: bold;
    background-color: var(--color-white);
    cursor: pointer;
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

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`;

export const NameContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const EditButton = styled.button`
    margin-left: 10px;
    font-size: 12px;
    font-weight: bold;
    padding: 4px 8px; 
    cursor: pointer;
    background-color: var(--color-primary);
    color: var(--color-white);
    border: none;
    border-radius: 10px;
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
