import { IButtonItemProps, RemodalType } from "src/remodal/types";

export type StatelessComponentArgs<T> = T & { children?: React.ReactNode };

export interface IButtonsProps {
    type: RemodalType;
    buttons: IButtonItemProps[];
    buttonsWrapperStyle?: React.CSSProperties;
    buttonStyle?: React.CSSProperties;
}

export interface IButtonProps {
    type: RemodalType;
    size: number;
    buttonStyle?: React.CSSProperties;
}
