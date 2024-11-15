import level1Gift from "@/assets/logo/level1.gif";
import level2Gift from "@/assets/logo/level2.gif";
import level3Gift from "@/assets/logo/level3.gif";

import * as Styles from "./index.style";

export interface TempProps {
    width: string;
    height: string;
    level?: number;
}

export const Temp = (props: TempProps) => {
    const levelGifList: { [key: number]: string } = {
        1: level1Gift,
        2: level2Gift,
        3: level3Gift,
    };

    return (
        <Styles.TempElement width={props.width} height={props.height}>
            <Styles.TempImg src={levelGifList[props.level ?? 1]} alt="temp" />
        </Styles.TempElement>
    );
};
