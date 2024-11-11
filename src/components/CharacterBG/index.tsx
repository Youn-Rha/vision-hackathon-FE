import * as Styles from "./index.style";

interface CharacterBGProps {
    imageUrl: string;
}


export const CharacterBG = ({ imageUrl }: CharacterBGProps) => {
    return (
        <Styles.Container>
            <Styles.Character src={imageUrl} alt="character" />
        </Styles.Container>
    );
};