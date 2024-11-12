import { Text } from "@/components/Text";

import * as Styles from "./index.style";

export interface PointRecordProps {
    type: string;
    receivedDateTime: string;
    receivedPoint: number;
    imgSrc: string;
}

export const PointRecord = (props: PointRecordProps) => {
    const formattedPoint = props.receivedPoint > 0 ? `+${props.receivedPoint}` : `${props.receivedPoint}`;

    const formattedDateTime = new Date(props.receivedDateTime).toLocaleString("ko-KR", {
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });

    return (
        <Styles.Container>
            <Styles.Record>
                <Styles.IconContainer>
                    <Styles.Icon src={props.imgSrc} alt={props.type} />
                </Styles.IconContainer>
                <Styles.RecordDetail>
                    <Text size="l" weight="bold" color="black">
                        {props.type}
                    </Text>
                    <Text size="s" weight="normal" color="black">
                        {formattedDateTime}
                    </Text>
                </Styles.RecordDetail>
            </Styles.Record>
            <Text size="m" weight="bold" color={props.receivedPoint > 0 ? "primary" : "black"}>
                {formattedPoint} point
            </Text>
        </Styles.Container>
    );
};
