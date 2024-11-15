import { Text } from "../Text";
import * as Styles from "./index.style";

export interface PageBarProps {
    pageName: string;
    onClick?: () => void; // 수정: `onClick`은 매개변수를 받지 않음
}

export const PageBar = ({ pageName, onClick }: PageBarProps) => {
    return (
        <Styles.Container>
            <Styles.Arrow onClick={onClick} />
            <Text size="m" weight="bold" color="black">
                {pageName}
            </Text>
        </Styles.Container>
    );
};
