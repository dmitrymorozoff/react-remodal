import { IButtonItemProps } from "src/remodal/types";

export type StatelessComponentArgs<T> = T & { children?: React.ReactNode };

export interface IButtonsProps {
    buttons: IButtonItemProps[];
    buttonsWrapperStyle?: React.CSSProperties;
    buttonStyle?: React.CSSProperties;
}

export interface IButtonProps {
    size: number;
    buttonStyle?: React.CSSProperties;
}
