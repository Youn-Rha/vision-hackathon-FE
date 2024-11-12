import { Text } from "../Text";
import * as Styles from "./index.style";
import backArrow from "../../assets/backarrow.png"

export interface PageBarProps {
    pagename: string;
}

export const PageBar = ({pagename}: PageBarProps) => {
    return (
        <Styles.Container>
            <Styles.Arrow src={backArrow} />
            <Text size="m" weight="bold" color="black">
                {pagename}
            </Text>
        </Styles.Container>
    );
}