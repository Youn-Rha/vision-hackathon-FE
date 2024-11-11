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
        </Styles.Container>
    );
};