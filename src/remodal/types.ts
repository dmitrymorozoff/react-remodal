export interface IStyleProps {
    overlay?: React.CSSProperties;
    modal?: React.CSSProperties;
}

type OnButtonClickFunction = () => void;

export interface IButtonItemProps {
    title: string;
    handler: OnButtonClickFunction;
}

type OnCloseCallbackFunction = () => void;

export interface IRemodalProps {
    closeOnOverlayClick: boolean;
    isOpen: boolean;
    onClose: OnCloseCallbackFunction;
    style: IStyleProps;
    isShowCloseButton: boolean;
    buttons: IButtonItemProps[];
}

export const defaultProps: IRemodalProps = {
    closeOnOverlayClick: true,
    isOpen: false,
    onClose: () => ({}),
    style: {
        modal: {},
        overlay: {},
    },
    isShowCloseButton: true,
    buttons: [{ title: "Close", handler: () => ({}) }, { title: "Submit", handler: () => ({}) }],
};

export type StatelessComponentArgs<T> = T & { children?: React.ReactNode };
