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
    type:
        | "ATTENDANCE_DAY_1"
        | "ATTENDANCE_DAY_2"
        | "ATTENDANCE_DAY_3"
        | "ATTENDANCE_DAY_4"
        | "ATTENDANCE_DAY_5_OR_MORE"
        | "DAILY_RESPONSE"
        | "DIARY"
        | "GROWTH_WATER"
        | "GROWTH_SUN"
        | "GROWTH_NUTRIENT"
        | "CHAT_BOT";
    status: string;
    receivedDateTime: string;
    receivedPoint: number;
}

export const PointRecord = (props: PointRecordProps) => {
    const formattedPoint = props.status == "EARNED" ? `+${props.receivedPoint}` : `-${props.receivedPoint}`;

    const formattedDateTime = new Date(props.receivedDateTime).toLocaleString("ko-KR", {
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });

    const recordImgList = {
        ATTENDANCE_DAY_1: attendanceIcon,
        ATTENDANCE_DAY_2: attendanceIcon,
        ATTENDANCE_DAY_3: attendanceIcon,
        ATTENDANCE_DAY_4: attendanceIcon,
        ATTENDANCE_DAY_5_OR_MORE: attendanceIcon,
        CHAT_BOT: chatIcon,
        DIARY: diaryIcon,
        DAILY_RESPONSE: questionIcon,
        GROWTH_WATER: waterIcon,
        GROWTH_SUN: sunIcon,
        GROWTH_NUTRIENT: nutrientsIcon,
    };

    const textType = {
        ATTENDANCE_DAY_1: "출석",
        ATTENDANCE_DAY_2: "연속 출석",
        ATTENDANCE_DAY_3: "연속 출석",
        ATTENDANCE_DAY_4: "연속 출석",
        ATTENDANCE_DAY_5_OR_MORE: "연속 출석",
        CHAT_BOT: "채팅하기",
        DIARY: "일기 작성",
        DAILY_RESPONSE: "1일 1질문",
        GROWTH_WATER: "물주기",
        GROWTH_SUN: "햇빛 쐬기",
        GROWTH_NUTRIENT: "영양분 주기",
    };

    return (
        <Styles.Container>
            <Styles.Record>
                <Styles.IconContainer>
                    <Styles.Icon src={recordImgList[props.type]} alt={props.type} />
                </Styles.IconContainer>
                <Styles.RecordDetail>
                    <Text size="m" weight="bold" color="black">
                        {textType[props.type]}
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
