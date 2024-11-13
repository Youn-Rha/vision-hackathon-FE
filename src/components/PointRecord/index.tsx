import { Text } from "@/components/Text";

import diaryIcon from "@/assets/pointRecord/calendar.png";
import chatIcon from "@/assets/pointRecord/chat.png";
import attendanceIcon from "@/assets/pointRecord/check.png";
import questionIcon from "@/assets/pointRecord/mail.png";
import nutrientsIcon from "@/assets/pointRecord/plant.png";
import sunIcon from "@/assets/pointRecord/sun.png";
import waterIcon from "@/assets/pointRecord/water.png";

import * as Styles from "./index.style";

export interface PointRecordProps {
    type: "attendance" | "question" | "chat" | "diary" | "water" | "sun" | "nutrients";
    receivedDateTime: string;
    receivedPoint: number;
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

    const recordImgList = {
        attendance: attendanceIcon,
        chat: chatIcon,
        diary: diaryIcon,
        question: questionIcon,
        sun: sunIcon,
        water: waterIcon,
        nutrients: nutrientsIcon,
    };

    return (
        <Styles.Container>
            <Styles.Record>
                <Styles.IconContainer>
                    <Styles.Icon src={recordImgList[props.type]} alt={props.type} />
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
