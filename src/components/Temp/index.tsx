import * as Styles from "./index.style";

export interface TempProps {
    width: string;
    height: string;
}

export const Temp = (props: TempProps) => {
    return (
        <Styles.TempElement width={props.width} height={props.height}>
            캐릭터
        </Styles.TempElement>
    );
};
