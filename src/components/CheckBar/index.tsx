import React, { useEffect, useState } from "react";

import { Text } from "../Text";
import * as Styles from "./index.style";

export interface CheckBarProps {
    value: number;
}

export const CheckBar = ({ value = 50 }: CheckBarProps) => {
    const [currentValue, setCurrentValue] = useState<number>(value);
    useEffect(() => {
        setCurrentValue(value);
    }, [value]);
    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(Number(event.target.value));
        //console.log(event.target.value);
    };

    return (
        <Styles.Container>
            <Styles.Slider type="range" value={currentValue} min={0} max={100} onChange={handleSliderChange} />
            <Styles.TextContainer>
                <Text size="xs" color="gray">
                    아니다
                </Text>
                <Text size="xs" color="gray">
                    그렇다
                </Text>
            </Styles.TextContainer>
        </Styles.Container>
    );
};
