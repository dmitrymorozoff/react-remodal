const Parser = require("html-react-parser");
const cx = require("classnames");
import * as React from "react";
import { Buttons } from "./components/buttons";
import { CloseButton } from "./components/close-button";
import { Content } from "./components/content";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Modal } from "./components/modal";
import { Outer } from "./components/outer";
import { Portal } from "./components/portal";
import { Title } from "./components/title";
import { defaultProps, IRemodalProps, IRemodalState } from "./types";
import { BASE_CLASSNAME } from "./vars";

export class Remodal extends React.Component<IRemodalProps, IRemodalState> {
    public static defaultProps: Partial<IRemodalProps> = defaultProps;
    private closeTimer: any;

    constructor(props: IRemodalProps) {
        super(props);
        this.state = {
            open: false,
            fullscreen: false,
            isKeyDown: false,
            isAfterOpen: false,
            isBeforeClose: false,
            closesTime: 0,
        };
    }

    public static getDerivedStateFromProps(nextProps: IRemodalProps, prevState: IRemodalState) {
        if (!prevState.open && nextProps.isOpen && !prevState.isKeyDown) {
            return {
                open: true,
            };
        }
        if (prevState.open && !nextProps.isOpen) {
            return {
                open: false,
            };
        }
        if (!prevState.fullscreen && nextProps.isFullScreen) {
            return {
                fullscreen: true,
            };
        }

        return null;
    }

    public componentDidMount() {
        const { isOpen } = this.props;
        if (isOpen) {
            this.openModal();
        }
    }

    public componentDidUpdate(prevProps: IRemodalProps, prevState: IRemodalState) {
        if (prevState.open && !this.state.open) {
            this.closeModal();
        } else if (!prevProps.isOpen && this.props.isOpen) {
            this.openModal();
        }
    }

    public componentWillUnmount() {
        const { isOpen } = this.props;
        if (isOpen) {
            this.closeModal();
        }
        clearTimeout(this.closeTimer);
    }

    public onKeyDownHandler = (event: KeyboardEvent): void => {
        const { closeOnEsc, onEscKeyDown } = this.props;
        if (closeOnEsc && event.keyCode === 27) {
            this.setState({
                isKeyDown: true,
            });
            this.closeModal();
            onEscKeyDown(event);
            this.setState({
                isKeyDown: false,
            });
        }
    };

    public openModal = (): void => {
        this.setState(
            {
                open: true,
            },
            () => {
                this.setState({ isAfterOpen: true });
            },
        );
        const { closeOnEsc } = this.props;

        if (closeOnEsc) {
            document.addEventListener("keydown", this.onKeyDownHandler);
        }
    };

    public closeModal = (): void => {
        const { closeTimeoutMS } = this.props;
        if (closeTimeoutMS <= 0) {
            this.closeHandler();

            return;
        }
        const closesTime = Date.now() + closeTimeoutMS;
        this.setState({ closesTime, isBeforeClose: true }, () => {
            this.closeTimer = setTimeout(() => {
                this.closeHandler();
            }, this.state.closesTime - Date.now());
        });
    };

    public closeHandler = () => {
        this.setState({
            open: false,
            isAfterOpen: false,
            isBeforeClose: false,
        });

        const { onClose } = this.props;
        onClose();
        const { closeOnEsc } = this.props;
        if (closeOnEsc) {
            document.removeEventListener("keydown", this.onKeyDownHandler);
        }
    };

    public onModalClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        event.stopPropagation();
    };

    public onOverlayClickHandler = (event: React.MouseEvent<HTMLDivElement>): void => {
        const { onOverlayClick, closeOnOverlayClick } = this.props;
        if (closeOnOverlayClick) {
            this.closeModal();
            onOverlayClick(event);
        }
    };

    public getClassNames = (userClassName: string, appendClassName?: string) => {
        const { type } = this.props;
        const { open, isAfterOpen, isBeforeClose } = this.state;
        const newAppendClassName = appendClassName ? `__${appendClassName}` : "";

        return cx(`${BASE_CLASSNAME}${newAppendClassName}`, userClassName, {
            [`${BASE_CLASSNAME}${newAppendClassName}_open`]: open,
            [`${BASE_CLASSNAME}${newAppendClassName}_is-after-open`]: isAfterOpen,
            [`${BASE_CLASSNAME}${newAppendClassName}_is-before-close`]: isBeforeClose,
            [`${BASE_CLASSNAME}${newAppendClassName}_${type}`]: type,
        });
    };

    public render() {
        const {
            type,
            children,
            style,
            isShowCloseButton,
            buttons,
            closeTimeoutMS,
            closeButtonSize,
            isScrollable,
            title,
            innerHTML,
            className,
            portalClassName,
            modalClassName,
            mainClassName,
            headerClassName,
            closeButtonClassName,
            titleClassName,
            contentClassName,
            buttonsClassName,
            buttonClassName,
            customCloseIcon,
        } = this.props;
        const { open, fullscreen, isAfterOpen, isBeforeClose } = this.state;

        return (
            <Portal portalClassName={portalClassName}>
                <Outer
                    isOpen={open}
                    isFullScreen={fullscreen}
                    style={style.overlay}
                    isAfterOpen={isAfterOpen}
                    isBeforeClose={isBeforeClose}
                    closeTimeoutMS={closeTimeoutMS}
                    onClick={this.onOverlayClickHandler}
                    className={this.getClassNames(className)}
                >
                    <Modal
                        onClick={this.onModalClick}
                        style={style.modal}
                        isOpen={open}
                        isFullScreen={fullscreen}
                        isAfterOpen={isAfterOpen}
                        isBeforeClose={isBeforeClose}
                        closeTimeoutMS={closeTimeoutMS}
                        isScrollable={isScrollable}
                        className={this.getClassNames(modalClassName, "modal")}
                    >
                        {open && (
                            <React.Fragment>
                                <Main
                                    style={style.main}
                                    className={this.getClassNames(mainClassName, "main")}
                                >
                                    {isShowCloseButton && (
                                        <CloseButton
                                            customCloseIcon={customCloseIcon}
                                            closeButtonSize={closeButtonSize}
                                            onClick={this.closeModal}
                                            style={style.closeButton}
                                            className={this.getClassNames(closeButtonClassName, "close-btn")}
                                        />
                                    )}
                                    {title && (
                                        <Header className={this.getClassNames(headerClassName, "header")}>
                                            <Title
                                                style={style.title}
                                                className={this.getClassNames(titleClassName, "title")}
                                            >
                                                {title}
                                            </Title>
                                        </Header>
                                    )}
                                    <Content
                                        style={style.content}
                                        className={this.getClassNames(contentClassName, "content")}
                                    >
                                        {innerHTML && Parser(innerHTML)}
                                        {children}
                                    </Content>
                                </Main>
                                <Buttons
                                    type={type}
                                    buttons={buttons}
                                    buttonStyle={style.button}
                                    buttonsWrapperStyle={style.buttonsWrapper}
                                    className={this.getClassNames(buttonsClassName, "buttons")}
                                    buttonClassName={this.getClassNames(buttonClassName, "button")}
                                />
                            </React.Fragment>
                        )}
                    </Modal>
                </Outer>
            </Portal>
        );
    }
}
