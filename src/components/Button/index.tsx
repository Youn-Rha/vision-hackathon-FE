import { ButtonElement } from "./index.style";

export interface ButtonProps extends React.ComponentProps<"button"> {
    variant: "primary" | "secondary" | "tertiary" | "login" | "rectangle";

    width: string;
    height: string;
}

export const Button = (props: ButtonProps) => {
    return <ButtonElement {...props}></ButtonElement>;
};
