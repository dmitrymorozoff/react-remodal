import { IButtonItemProps } from "src/remodal/types";

export type StatelessComponentArgs<T> = T & { children?: React.ReactNode };

export interface IButtonsProps {
    buttons: IButtonItemProps[];
}

export interface IButtonProps {
    size: number;
}
