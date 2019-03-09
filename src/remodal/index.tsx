const Parser = require("html-react-parser");
const cx = require("classnames");
import * as React from "react";
import { Buttons } from "./components/buttons";
import { CloseButton } from "./components/close-button";
import { Content } from "./components/content";
import { FullScreenButton } from "./components/fullscreen-button";
import { Main } from "./components/main";
import { Modal } from "./components/modal";
import { Outer } from "./components/outer";
import { Portal } from "./components/portal";
import { Title } from "./components/title";
import { defaultProps, IRemodalProps, IRemodalState } from "./types";
import { BASE_CLASSNAME } from "./vars";

export class Remodal extends React.Component<IRemodalProps, IRemodalState> {
    public static defaultProps: Partial<IRemodalProps> = defaultProps;

    constructor(props: IRemodalProps) {
        super(props);
        this.state = {
            open: false,
            isKeyDown: false,
        };
    }

    public static getDerivedStateFromProps(nextProps: IRemodalProps, prevState: IRemodalState) {
        if (!prevState.open && nextProps.isOpen && !prevState.isKeyDown) {
            return {
                open: true,
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
        this.setState({
            open: true,
        });
        const { closeOnEsc } = this.props;

        if (closeOnEsc) {
            document.addEventListener("keydown", this.onKeyDownHandler);
        }
    };

    public closeModal = (): void => {
        this.setState({
            open: false,
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
        this.closeModal();
        const { onOverlayClick } = this.props;
        onOverlayClick(event);
    };

    public render(): JSX.Element {
        const {
            children,
            style,
            isShowCloseButton,
            buttons,
            animationDuration,
            closeButtonSize,
            isScrollable,
            title,
            innerHTML,
            className,
            portalClassName,
            customCloseIcon,
            isFullScreen,
            fullScreenButtonSize,
            isShowFullScreenButton,
        } = this.props;
        const { open } = this.state;

        return (
            <Portal portalClassName={portalClassName}>
                <Outer
                    isOpen={open}
                    style={style.overlay}
                    animationDuration={animationDuration}
                    onClick={this.onOverlayClickHandler}
                    className={cx(BASE_CLASSNAME, className, { [`${BASE_CLASSNAME}_open`]: open })}
                >
                    <Modal
                        onClick={this.onModalClick}
                        style={style.modal}
                        isOpen={open}
                        animationDuration={animationDuration}
                        isScrollable={isScrollable}
                        className={cx(`${BASE_CLASSNAME}__modal`, {
                            [`${BASE_CLASSNAME}__modal_open`]: open,
                        })}
                    >
                        <Main
                            style={style.main}
                            className={cx(`${BASE_CLASSNAME}__main`, {
                                [`${BASE_CLASSNAME}__main_open`]: open,
                            })}
                        >
                            {isShowCloseButton && (
                                <CloseButton
                                    customCloseIcon={customCloseIcon}
                                    closeButtonSize={closeButtonSize}
                                    onClick={this.closeModal}
                                    style={style.closeButton}
                                    className={cx(`${BASE_CLASSNAME}__close-btn`, {
                                        [`${BASE_CLASSNAME}__close-btn_open`]: open,
                                    })}
                                />
                            )}
                            {isShowFullScreenButton && (
                                <FullScreenButton
                                    customFullScreenIcon={customCloseIcon}
                                    fullScreenButtonSize={fullScreenButtonSize}
                                    style={style.closeButton}
                                    className={cx(`${BASE_CLASSNAME}__fullscreen-btn`, {
                                        [`${BASE_CLASSNAME}__fullscreen_open`]: open,
                                    })}
                                />
                            )}
                            {title && (
                                <Title
                                    style={style.title}
                                    className={cx(`${BASE_CLASSNAME}__title`, {
                                        [`${BASE_CLASSNAME}__title_open`]: open,
                                    })}
                                >
                                    {title}
                                </Title>
                            )}
                            <Content
                                style={style.content}
                                className={cx(`${BASE_CLASSNAME}__content`, {
                                    [`${BASE_CLASSNAME}__content_open`]: open,
                                })}
                            >
                                {innerHTML && Parser(innerHTML)}
                                {children}
                            </Content>
                        </Main>
                        <Buttons
                            buttons={buttons}
                            buttonStyle={style.button}
                            buttonsWrapperStyle={style.buttonsWrapper}
                        />
                    </Modal>
                </Outer>
            </Portal>
        );
    }
}
