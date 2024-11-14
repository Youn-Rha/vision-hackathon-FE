import { useState } from "react";

import { purchaseGrowthButton } from "@/apis/pet/pet";

export const useUpGradeExperience = () => {
    const [data, setData] = useState({ EarnedExperience: 0 });

    const upgradeExperience = async (growthButton: "WATER" | "SUN" | "NUTRIENT") => {
        try {
            const response = await purchaseGrowthButton(growthButton);
            setData({ EarnedExperience: response.EarnedExperience });
            console.log("응답:", response);
        } catch (error) {
            console.error("Experience upgrade failed:", error);
        }
    };

    return { ...data, upgradeExperience };
};
