import React, { useEffect, useState } from "react";
import { Text } from "../Text";
import * as Styles from "./index.style";

export interface CheckBarProps {
    value: number;
    onChange: (value: number) => void; // 상위 컴포넌트에 값을 전달하는 콜백
}

export const CheckBar = ({ value = 50, onChange }: CheckBarProps) => {
    const [currentValue, setCurrentValue] = useState<number>(value);

    useEffect(() => {
        setCurrentValue(value);
    }, [value]);

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        setCurrentValue(newValue);
        onChange(newValue); // 상위 컴포넌트로 값 전달
    };

    return (
        <Styles.Container>
            <Styles.Slider
                type="range"
                value={currentValue}
                min={0}
                max={100}
                onChange={handleSliderChange}
            />
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