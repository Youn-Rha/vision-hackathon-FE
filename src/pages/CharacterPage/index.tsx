import { useNavigate } from "react-router-dom";

import { GrowBar } from "@/components/GrowBar";
import { IconButton } from "@/components/IconButton";
import { PointButton } from "@/components/PointButton";
import { Temp } from "@/components/Temp";
import { Text } from "@/components/Text";

import * as Styles from "./index.style";

export const CharacterPage = () => {
    const navigate = useNavigate();

    const handleBookClick = () => {
        navigate("/record/point");
    };

    return (
        <Styles.Container>
            <Styles.Header>
                <Styles.Logo>Logo</Styles.Logo>
                <IconButton variant="book" onClick={handleBookClick} />
            </Styles.Header>

            <Styles.CharacterItem>
                <Text size="l" color="black" weight="bold">
                    저를 보러오셨군요! 반가워요 •ᴗ•
                </Text>
                <Temp width="300px" height="270px" />
                <Text size="l" color="black" weight="bold">
                    새싹
                </Text>
            </Styles.CharacterItem>

            <Styles.BarContainer>
                <GrowBar experience={55} />
                <Text size="s" color="gray" weight="normal">
                    보유 포인트: 10 point
                </Text>

                <Styles.ButtonContainer>
                    <PointButton variant="water" />
                    <PointButton variant="sun" />
                    <PointButton variant="nutrients" />
                </Styles.ButtonContainer>
            </Styles.BarContainer>
        </Styles.Container>
    );
};
