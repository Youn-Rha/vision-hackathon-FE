import { useNavigate } from "react-router-dom";

import { IconButton } from "@/components/IconButton";
import { PointButton } from "@/components/PointButton";
import { Temp } from "@/components/Temp";
import { Text } from "@/components/Text";

import { useGetCharacter } from "@/hooks/CharacterPage/useGetCharacter";
import { useGetPoint } from "@/hooks/CharacterPage/useGetPoint";
import { useUpGradeExperience } from "@/hooks/CharacterPage/useUpGradeExperience";

import * as Styles from "./index.style";
import { GrowBar1 } from "@/components/GrowBar1";

export const CharacterPage = () => {
    const navigate = useNavigate();

    const handleBookClick = () => {
        navigate("/record/point");
    };

    const { name, level, experience, refetch } = useGetCharacter();
    const { point, pointRefetch } = useGetPoint();
    const { upgradeExperience } = useUpGradeExperience();

    const handleExperienceUpgrade = async (growthButton: "WATER" | "SUN" | "NUTRIENT") => {
        await upgradeExperience(growthButton);
        refetch(); // 경험치 및 캐릭터 데이터 다시 가져오기
        pointRefetch(); // 포인트 데이터 다시 가져오기
    };

    return (
        <Styles.Container>
            <Styles.Header>
                <Styles.Logo>Logo</Styles.Logo>
                <IconButton variant="book" onClick={handleBookClick} />
            </Styles.Header>

            <Styles.CharacterItem>
                {level === 1 && (
                    <Text size="l" color="black" weight="bold">
                        1단계 입니다
                    </Text>
                )}
                {level === 2 && (
                    <Text size="l" color="black" weight="bold">
                        2단계 입니다
                    </Text>
                )}
                {level === 3 && (
                    <Text size="l" color="black" weight="bold">
                        3단계 입니다
                    </Text>
                )}
                <Temp width="300px" height="270px" />
                <Text size="l" color="black" weight="bold">
                    {name}
                </Text>
            </Styles.CharacterItem>

            <Styles.BarContainer>
                <GrowBar1 experience={experience} />
                <Text size="s" color="gray" weight="normal">
                    보유 포인트: {point} point
                </Text>

                <Styles.ButtonContainer>
                    <PointButton variant="water" onClick={() => handleExperienceUpgrade("WATER")} />
                    <PointButton variant="sun" onClick={() => handleExperienceUpgrade("SUN")} />
                    <PointButton variant="nutrients" onClick={() => handleExperienceUpgrade("NUTRIENT")} />
                </Styles.ButtonContainer>
            </Styles.BarContainer>
        </Styles.Container>
    );
};
