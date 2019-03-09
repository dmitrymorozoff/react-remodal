import { HTMLAttributes } from "react";

export interface IFullScreenButtonProps extends HTMLAttributes<HTMLDivElement> {
    fullScreenButtonSize: number;
    customFullScreenIcon?: JSX.Element;
}
