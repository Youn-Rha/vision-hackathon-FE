import styled from "@emotion/styled";

export const Container = styled.div`
    width: 100%;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;
`;

export const Record = styled.div`
    width: fit-content;
    height: 100%;

    display: flex;
    align-items: center;
    gap: 15px;
`;

export const RecordDetail = styled.div`
    display: flex;
    flex-direction: column;

    gap: 5px;
`;

export const IconContainer = styled.div`
    width: 76px;
    height: 67px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 15px;
    background-color: #fff;
`;

export const Icon = styled.img`
    width: 40px;
    height: 40px;
`;
