import { HTMLAttributes } from "react";

export interface ICloseButtonProps extends HTMLAttributes<HTMLDivElement> {
    closeButtonSize: number;
    customCloseIcon?: JSX.Element;
}
