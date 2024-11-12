import { Text } from "../Text";
import * as Styles from "./index.style";

export interface PointButtonProps {
    variant: "water" | "sun" | "nutrients" | string;
    children?: React.ReactNode;
    iconSrc: string;
    point: number;
}

export const PointButton = (props: PointButtonProps) => {
    return (
        <Styles.Container>
            <Styles.Button>
                {props.children}
                <Styles.Icon src={props.iconSrc} alt={props.variant} /> {/* iconSrc를 src에 사용 */}
            </Styles.Button>
            <Text size="s" weight="normal" color="gray">
                {props.point} point
            </Text>
        </Styles.Container>
    );
};
