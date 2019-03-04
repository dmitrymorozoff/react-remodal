import * as React from "react";
import { useEffect, useState } from "react";
import { Buttons } from "./components/buttons";
import { CloseButton } from "./components/close-button";
import { Content } from "./components/content";
import { Modal } from "./components/modal";
import { Outer } from "./components/outer";
import { Overlay } from "./components/overlay";
import { Portal } from "./components/portal";
import { defaultProps, IRemodalProps, StatelessComponentArgs } from "./types";

export const Remodal = ({
    children,
    isOpen,
    onClose,
    style,
    isShowCloseButton,
    buttons,
}: StatelessComponentArgs<IRemodalProps>): React.ReactElement<IRemodalProps> => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
        onClose();
    };

    useEffect(() => {
        if (isOpen) {
            openModal();
        }
    });

    function onOverlayClickHandler() {
        closeModal();
    }

    return (
        <Portal>
            <Outer isOpen={open}>
                <Overlay style={style.overlay} onClick={onOverlayClickHandler} />
                <Modal style={style.modal}>
                    {isShowCloseButton && <CloseButton onClick={closeModal} />}
                    <Content>{children}</Content>
                    <Buttons buttons={buttons} />
                </Modal>
            </Outer>
        </Portal>
    );
};

Remodal.defaultProps = defaultProps;
