import { Route, Routes } from "react-router-dom";

import { Global } from "@emotion/react";

import { CharacterSettingPage } from "@/pages/CharacterSettingPage";
import { LoginPage } from "@/pages/LoginPage";

import { resetStyles } from "@/styles/reset";
import { rootStyles } from "@/styles/root";

import { CharacterStartPage } from "./pages/CharacterStartPage";
import { CheckEndPage } from "./pages/CheckEndPage";
import { CheckPage } from "./pages/CheckPage";
import { CheckStartPage } from "./pages/CheckStartPage";
import { MainPage } from "./pages/MainPage";
import { MemoPage } from "./pages/MemoPage";
import { MyPage } from "./pages/MyPage";
import { RootLayout } from "@/layouts/RootLayout";

export const Router = () => {
    return (
        <>
            <Global styles={[resetStyles, rootStyles]} />
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route path="/" element={<MainPage />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/character/setting" element={<CharacterSettingPage />}></Route>

                    <Route path="/check" element={<CheckPage />}></Route>

                    <Route path="/check/end" element={<CheckEndPage />}></Route>

                    <Route path="/check/start" element={<CheckStartPage />}></Route>

                    <Route path="/character/start" element={<CharacterStartPage />}></Route>
                    <Route path="/mypage" element={<MyPage />}></Route>

                    <Route path="/memo" element={<MemoPage />}></Route>
                </Route>
            </Routes>
        </>
    );
};
