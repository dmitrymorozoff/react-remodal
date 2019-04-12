import * as React from "react";

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

export enum RemodalType {
    success = "success",
    warning = "warning",
    error = "error",
    info = "info",
}

export interface IRemodalProps {
    type: RemodalType;
    closeOnOverlayClick: boolean;
    isOpen: boolean;
    closeOnEsc: boolean;
    onEscKeyDown: OnEscKeyDownCallbackFunction;
    onClose: OnCloseCallbackFunction;
    onOverlayClick: OnOverlayClickCallbackFunction;
    style: IStyleProps;
    isShowCloseButton: boolean;
    isFullScreen: boolean;
    closeButtonSize: number;
    buttons: IButtonItemProps[];
    closeTimeoutMS: number;
    isScrollable: boolean;
    title: string;
    innerHTML: string;
    className: string;
    portalClassName: string;
    modalClassName: string;
    mainClassName: string;
    headerClassName: string;
    closeButtonClassName: string;
    titleClassName: string;
    contentClassName: string;
    buttonsClassName: string;
    buttonClassName: string;
    customCloseIcon: JSX.Element;
}

export interface IRemodalState {
    open: boolean;
    fullscreen: boolean;
    isKeyDown: boolean;
    isAfterOpen: boolean;
    isBeforeClose: boolean;
    closesTime: number;
}

// const defaultStyles = {
//     modal: {
//         width: "800px",
//     },
//     overlay: {
//         backgroundColor: "rgba(185,185,185,0.95)",
//     },
//     main: {
//         padding: "40px",
//     },
//     closeButton: {
//         width: "26px",
//         height: "26px",
//     },
//     fullScreenButton: {
//         width: "26px",
//         height: "26px",
//     },
//     title: {
//         fontSize: "32px",
//     },
//     content: {
//         fontSize: "22px",
//     },
//     buttonsWrapper: {
//         borderWidth: "2px",
//     },
//     button: {
//         height: "80px",
//         fontSize: "22px",
//     },
// };

export const PORTAL_CLASSNAME = "react-remodal-portal";

export const defaultProps = {
    closeOnOverlayClick: true,
    closeOnEsc: true,
    onEscKeyDown: () => ({}),
    onClose: () => ({}),
    onOverlayClick: () => ({}),
    isOpen: false,
    isFullScreen: false,
    style: {},
    isShowCloseButton: true,
    closeButtonSize: 20,
    buttons: [
        { title: "Hell, no!", handler: () => ({}) },
        { title: "Yes, I'am insane!", handler: () => ({}) },
    ],
    closeTimeoutMS: 0,
    isScrollable: false,
    title: "Are you sure you want to do that?",
    className: "my-custom-class-remodal",
    portalClassName: PORTAL_CLASSNAME,
    modalClassName: "my-custom-class-modal",
    mainClassName: "my-custom-class-main",
    headerClassName: "my-custom-class-header",
    closeButtonClassName: "my-custom-class-closeButton",
    titleClassName: "my-custom-class-title",
    contentClassName: "my-custom-class-content",
    buttonsClassName: "my-custom-class-buttons",
    buttonClassName: "my-custom-class-button",
};

export type StatelessComponentArgs<T> = T & { children?: React.ReactNode };
