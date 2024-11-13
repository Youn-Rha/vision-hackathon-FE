import { PointRecord } from "@/components/PointRecord";

import { PageBar } from "../../components/PageBar";
import { Text } from "../../components/Text";
import * as Styles from "./index.style";

export const PointRecordPage = () => {
    const recordList: Array<{
        type: "attendance" | "question" | "chat" | "diary" | "water" | "sun" | "nutrients";
        receivedDateTime: string;
        receivedPoint: number;
    }> = [
        {
            type: "attendance",
            receivedDateTime: "2021-09-01T09:00:00",
            receivedPoint: 10,
        },
        {
            type: "question",
            receivedDateTime: "2021-09-01T09:00:00",
            receivedPoint: 10,
        },
        {
            type: "chat",
            receivedDateTime: "2021-09-01T09:00:00",
            receivedPoint: 10,
        },
        {
            type: "diary",
            receivedDateTime: "2021-09-01T09:00:00",
            receivedPoint: 10,
        },
        {
            type: "water",
            receivedDateTime: "2021-09-01T09:00:00",
            receivedPoint: 10,
        },
        {
            type: "sun",
            receivedDateTime: "2021-09-01T09:00:00",
            receivedPoint: 10,
        },
        {
            type: "nutrients",
            receivedDateTime: "2021-09-01T09:00:00",
            receivedPoint: 10,
        },
        {
            type: "attendance",
            receivedDateTime: "2021-09-01T09:00:00",
            receivedPoint: 10,
        },
        {
            type: "attendance",
            receivedDateTime: "2021-09-01T09:00:00",
            receivedPoint: 10,
        },
        {
            type: "attendance",
            receivedDateTime: "2021-09-01T09:00:00",
            receivedPoint: 10,
        },
        {
            type: "attendance",
            receivedDateTime: "2021-09-01T09:00:00",
            receivedPoint: 10,
        },
        {
            type: "attendance",
            receivedDateTime: "2021-09-01T09:00:00",
            receivedPoint: 10,
        },
        {
            type: "attendance",
            receivedDateTime: "2021-09-01T09:00:00",
            receivedPoint: 10,
        },
    ];
    return (
        <Styles.Container>
            <Styles.FixedHeader>
                <PageBar pageName="포인트 조회" />
            </Styles.FixedHeader>
            <br></br>
            <Text size="l" weight="bold" color="black">
                기록
            </Text>
            <Styles.RecordContainer>
                {recordList.map((record, index) => (
                    <PointRecord key={index} {...record} />
                ))}
            </Styles.RecordContainer>
        </Styles.Container>
    );
};
