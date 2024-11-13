import { Text } from "../Text";
import * as Styles from "./index.style";
import backArrow from "../../assets/backarrow.png"
import { useNavigate } from "react-router-dom";

export interface PageBarProps {
    pageName: string;
}

export const PageBar = ({pageName}: PageBarProps) => {
    const navi = useNavigate();
    return (
        <Styles.Container>
            <Styles.Arrow src={backArrow} onClick={() => {navi(-1)}}/>
            <Text size="m" weight="bold" color="black">
                {pageName}
            </Text>
        </Styles.Container>
    );
}