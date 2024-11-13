import { Outlet } from "react-router-dom";

import styled from "@emotion/styled";

export const Main = styled.main`
    width: 100%;
    max-width: 440px;
    margin: 0 auto;
`;

export const RootLayout = () => {
    return (
        <>
            <Main>
                <Outlet />
            </Main>
        </>
    );
};
