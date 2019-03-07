export interface IStyleProps {
    overlay?: React.CSSProperties;
    modal?: React.CSSProperties;
    main?: React.CSSProperties;
    closeButton?: React.CSSProperties;
    title?: React.CSSProperties;
    content?: React.CSSProperties;
    buttonsWrapper?: React.CSSProperties;
    button?: React.CSSProperties;
}

type OnButtonClickFunction = () => void;

export interface IButtonItemProps {
    title: string;
    handler: OnButtonClickFunction;
}

type OnCloseCallbackFunction = () => void;
type OnOverlayClickCallbackFunction = () => void;
type OnEscKeyDownCallbackFunction = () => void;

export interface IRemodalProps {
    closeOnOverlayClick: boolean;
    isOpen: boolean;
    closeOnEsc: boolean;
    onEscKeyDown: OnEscKeyDownCallbackFunction;
    onClose: OnCloseCallbackFunction;
    onOverlayClick: OnOverlayClickCallbackFunction;
    style: IStyleProps;
    isShowCloseButton: boolean;
    closeButtonSize: number;
    buttons: IButtonItemProps[];
    animationDuration: number;
    isScrollable: boolean;
    title: string;
    customIcon: JSX.Element;
}

export interface IRemodalState {
    open: boolean;
    isKeyDown: boolean;
}

export const defaultProps = {
    closeOnOverlayClick: true,
    isOpen: false,
    closeOnEsc: true,
    onEscKeyDown: () => ({}),
    onClose: () => ({}),
    onOverlayClick: () => ({}),
    style: {
        modal: {
            width: "800px",
        },
        overlay: {
            backgroundColor: "rgba(185,185,185,0.95)",
        },
        main: {
            padding: "40px",
        },
        closeButton: {
            width: "26px",
            height: "26px",
        },
        title: {
            fontSize: "32px",
        },
        content: {
            fontSize: "22px",
        },
        buttonsWrapper: {
            borderWidth: "2px",
        },
        button: {
            height: "80px",
            fontSize: "22px",
        },
    },
    isShowCloseButton: true,
    closeButtonSize: 16,
    buttons: [{ title: "Close", handler: () => ({}) }, { title: "Submit", handler: () => ({}) }],
    animationDuration: 300,
    isScrollable: false,
    title: "Title",
};

export type StatelessComponentArgs<T> = T & { children?: React.ReactNode };
