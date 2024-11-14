// HomePage.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Styles from "./index.style";

export const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const [fade, setFade] = useState(false);

    useEffect(() => {
        // 3초 후 페이드아웃 시작
        const fadeTimer = setTimeout(() => setFade(true), 1500);

        // 페이드아웃 애니메이션 후 페이지 이동
        const navigateTimer = setTimeout(() => {
            navigate("/login");
        }, 2000);

        // 타이머 정리
        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(navigateTimer);
        };
    }, [navigate]);

    return (
        <Styles.Container fade={fade}>
            <img src="" alt="LOGO" />
        </Styles.Container>
    );
};