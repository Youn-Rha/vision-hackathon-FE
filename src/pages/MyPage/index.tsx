import { CharacterBG } from "../../components/CharacterBG";
import { PageBar } from "../../components/PageBar";
import { Text } from "../../components/Text";
import Character from "../../assets/react.svg"
import * as Styles from "./index.style";

export const MyPage = () => {
    return (
        <Styles.Container>
            <PageBar pagename="마이페이지" />
            <CharacterBG width="176px" height="176px" imageUrl={Character} />
            <Styles.TextContainer>
                <Text size="m" weight="bold">
                    이름
                </Text>
                <Text size="m" weight="bold">
                    example@co.kr
                </Text>
            </Styles.TextContainer>
            <Styles.TextContainer>
                <Text size="m" weight="bold">
                    기록 캘린더 보기
                </Text>
                <Styles.Divider />
                <Text size="m" weight="bold">
                    자가 문진표 확인
                </Text>
                <Styles.Divider />
                <Text size="m" weight="bold">
                    진단 결과 확인
                </Text>
            </Styles.TextContainer>
            <Styles.TextContainer>
                <Text size="s" weight="bold">
                    로그아웃
                </Text>
                <Text />
                <Text size="s" weight="bold" color="lightgray">
                    회원 탈퇴
                </Text>
            </Styles.TextContainer>
        </Styles.Container>
    );
};
