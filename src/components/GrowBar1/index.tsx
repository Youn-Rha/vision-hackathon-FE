import { Text } from "../Text";
import * as Styles from "./index.style";

export interface GrowBar1Props {
    experience: number;
}

export const GrowBar1 = ({ experience = 30 }: GrowBar1Props) => {
    return (
        <Styles.Container>
            <Styles.Wrapper>
                <Styles.Bar experience={experience}></Styles.Bar>
            </Styles.Wrapper>
            <Text size="s" weight="bold" color="black">
                {experience}%
            </Text>
        </Styles.Container>
    );
};
