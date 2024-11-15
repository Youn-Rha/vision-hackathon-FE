import level1Gift from "@/assets/logo/level1.gif";
import level2Gift from "@/assets/logo/level2.gif";
import level3Gift from "@/assets/logo/level3.gif";

import * as Styles from "./index.style";

export interface CharacterBGProps {
    width: string;
    height: string;

    onClick?: () => void;
    level?: number;
}

export const CharacterBG = ({ width, height, onClick, level }: CharacterBGProps) => {
    const levelGifList: { [key: number]: string } = {
        1: level1Gift,
        2: level2Gift,
        3: level3Gift,
    };

    return (
        <Styles.Container width={width} height={height} onClick={onClick}>
            <Styles.Character src={levelGifList[level ?? 1]} alt="character" />
        </Styles.Container>
    );
};
