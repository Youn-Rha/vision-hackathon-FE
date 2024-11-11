import { Text } from "../Text";
import * as Styles from "./index.style";

export interface GrowBarProps {
    experience: number;
}

export const GrowBar = ({experience = 30}: GrowBarProps) => {
    return (
        <Styles.Container>
            <Styles.Wrapper>
                <Styles.Bar experience={experience}></Styles.Bar>
            </Styles.Wrapper>
            <Text size="s" weight="bold" color="black">{experience}%</Text>
        </Styles.Container>
    );
};