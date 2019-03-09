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
type OnOverlayClickCallbackFunction = (event: React.MouseEvent<HTMLDivElement>) => void;
type OnEscKeyDownCallbackFunction = (event: KeyboardEvent) => void;

export interface IRemodalProps {
    closeOnOverlayClick: boolean;
    isOpen: boolean;
    closeOnEsc: boolean;
    onEscKeyDown: OnEscKeyDownCallbackFunction;
    onClose: OnCloseCallbackFunction;
    onOverlayClick: OnOverlayClickCallbackFunction;
    style: IStyleProps;
    isShowCloseButton: boolean;
    isShowFullScreenButton: boolean;
    isFullScreen: boolean;
    closeButtonSize: number;
    fullScreenButtonSize: number;
    buttons: IButtonItemProps[];
    animationDuration: number;
    isScrollable: boolean;
    title: string;
    innerHTML: string;
    className: string;
    portalClassName: string;
    customCloseIcon: JSX.Element;
}

export interface IRemodalState {
    open: boolean;
    isKeyDown: boolean;
}

const defaultStyles = {
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
};

export const defaultProps = {
    closeOnOverlayClick: true,
    isOpen: false,
    closeOnEsc: true,
    onEscKeyDown: () => ({}),
    onClose: () => ({}),
    onOverlayClick: () => ({}),
    style: {},
    isShowCloseButton: true,
    isShowFullScreenButton: true,
    isFullScreen: true,
    closeButtonSize: 16,
    fullScreenButtonSize: 16,
    buttons: [{ title: "Close", handler: () => ({}) }, { title: "Submit", handler: () => ({}) }],
    animationDuration: 300,
    isScrollable: false,
    title: "Title",
    innerHTML: "Description <b>with bold text</b><br/>",
    className: "my-custom-remodal-class",
    portalClassName: "react-remodal-portal",
};

export type StatelessComponentArgs<T> = T & { children?: React.ReactNode };
