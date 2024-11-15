import { useNavigate } from "react-router-dom";

import { PointRecord } from "@/components/PointRecord";

import { useGetPointRecord } from "@/hooks/PointRecordPage/useGetPointRecord";

import { PageBar } from "../../components/PageBar";
import { Text } from "../../components/Text";
import * as Styles from "./index.style";

export const PointRecordPage = () => {
    const { data: recordList } = useGetPointRecord(); // data 배열을 recordList로 가져옴
    const navigate = useNavigate();

    const heandleBackArrow = () => {
        navigate("/character");
    };

    return (
        <Styles.Container>
            <Styles.FixedHeader>
                <PageBar pageName="포인트 조회" onClick={heandleBackArrow} />
            </Styles.FixedHeader>
            <br />
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
