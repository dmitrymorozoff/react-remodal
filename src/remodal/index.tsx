import * as React from "react";
import { Buttons } from "./components/buttons";
import { CloseButton } from "./components/close-button";
import { Content } from "./components/content";
import { Main } from "./components/main";
import { Modal } from "./components/modal";
import { Outer } from "./components/outer";
import { Portal } from "./components/portal";
import { Title } from "./components/title";
import { defaultProps, IRemodalProps, IRemodalState } from "./types";

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

    public onKeyDownHandler = (event: KeyboardEvent) => {
        const { closeOnEsc, onEscKeyDown } = this.props;
        if (closeOnEsc && event.keyCode === 27) {
            this.setState({
                isKeyDown: true,
            });
            this.closeModal();
            onEscKeyDown();
            this.setState({
                isKeyDown: false,
            });
        }
    };

    public openModal = () => {
        this.setState({
            open: true,
        });
        const { closeOnEsc } = this.props;

        if (closeOnEsc) {
            document.addEventListener("keydown", this.onKeyDownHandler);
        }
    };

    public closeModal = () => {
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

    public onModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    public onOverlayClickHandler = () => {
        this.closeModal();
        const { onOverlayClick } = this.props;
        onOverlayClick();
    };

    public render() {
        const {
            children,
            style,
            isShowCloseButton,
            buttons,
            animationDuration,
            closeButtonSize,
            isScrollable,
            title,
        } = this.props;
        const { open } = this.state;
        return (
            <Portal>
                <Outer
                    isOpen={open}
                    style={style.overlay}
                    animationDuration={animationDuration}
                    onClick={this.onOverlayClickHandler}
                >
                    <Modal
                        onClick={this.onModalClick}
                        style={style.modal}
                        isOpen={open}
                        animationDuration={animationDuration}
                        isScrollable={isScrollable}
                    >
                        <Main style={style.main}>
                            {isShowCloseButton && (
                                <CloseButton
                                    closeButtonSize={closeButtonSize}
                                    onClick={this.closeModal}
                                    style={style.closeButton}
                                />
                            )}
                            {title && <Title style={style.title}>{title}</Title>}
                            <Content style={style.content}>{children}</Content>
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
