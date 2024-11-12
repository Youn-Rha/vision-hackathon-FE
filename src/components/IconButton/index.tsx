import bookIcon from "@/assets/IconButton/book.png";
import calendarIcon from "@/assets/IconButton/calendar.png";
import chatIcon from "@/assets/IconButton/chat.png";
import userIcon from "@/assets/IconButton/user.png";

import * as Styles from "./index.style";

export interface IconButtonProps {
    variant: "calendar" | "user" | "chat" | "book";
}

export const IconButton = ({ variant = "book" }: IconButtonProps) => {
    const iconList = {
        calendar: calendarIcon,
        user: userIcon,
        chat: chatIcon,
        book: bookIcon,
    };

    return (
        <Styles.ButtonElement>
            <Styles.IconElement src={iconList[variant]}></Styles.IconElement>
        </Styles.ButtonElement>
    );
};
