import { Route, Routes } from "react-router-dom";

import { Global } from "@emotion/react";

import { Login } from "@/pages/Login";

import { resetStyles } from "@/styles/reset";
import { rootStyles } from "@/styles/root";

import { RootLayout } from "@/layouts/RootLayout";

export const Router = () => {
    return (
        <>
            <Global styles={[resetStyles, rootStyles]} />
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route path="/login" element={<Login />}></Route>
                </Route>
            </Routes>
        </>
    );
};
