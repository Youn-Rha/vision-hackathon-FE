import * as Styles from "./index.style";

export interface CharacterBGProps {
    width: string;
    height: string;

    imageUrl: string;
}

export const CharacterBG = ({ width, height, imageUrl }: CharacterBGProps) => {
    return (
        <Styles.Container width={width} height={height}>
            <Styles.Character src={imageUrl} alt="character" />
        </Styles.Container>
    );
};
