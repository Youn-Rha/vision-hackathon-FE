import { Route, Routes } from "react-router-dom";

import { Global } from "@emotion/react";

import { CharacterSettingPage } from "@/pages/CharacterSettingPage";
import { LoginPage } from "@/pages/LoginPage";

import { resetStyles } from "@/styles/reset";
import { rootStyles } from "@/styles/root";

import { RootLayout } from "@/layouts/RootLayout";
import { CheckPage } from "./pages/CheckPage";

export const Router = () => {
    return (
        <>
            <Global styles={[resetStyles, rootStyles]} />
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/character/setting" element={<CharacterSettingPage />}></Route>
                    <Route path="/check" element={<CheckPage />}></Route>
                </Route>
            </Routes>
        </>
    );
};
