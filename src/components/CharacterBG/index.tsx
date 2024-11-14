import * as Styles from "./index.style";

export interface CharacterBGProps {
    width: string;
    height: string;

    imageUrl: string;
    onClick?: () => void;
}

export const CharacterBG = ({ width, height, imageUrl, onClick }: CharacterBGProps) => {
    return (
        <Styles.Container width={width} height={height} onClick={onClick}>
            <Styles.Character src={imageUrl} alt="character" />
        </Styles.Container>
    );
};
