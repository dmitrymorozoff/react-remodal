import * as React from "react";
import styled from "styled-components";

interface IStyleProps {
    modalOverlay?: React.CSSProperties;
    modalWindow?: React.CSSProperties;
}

interface IRemodalProps {
    isOpen: boolean;
    style: IStyleProps;
}

const defaultProps: IRemodalProps = {
    isOpen: false,
    style: {
        modalOverlay: {},
        modalWindow: {},
    },
};

interface IOverlayProps {
    isOpen: boolean;
}

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: ${(props: IOverlayProps) => (props.isOpen ? "1" : "0")};
    visibility: ${(props: IOverlayProps) => (props.isOpen ? "visible" : "hidden")};
`;

const Window = styled.div`
    position: fixed;
    background: white;
    width: 80%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

type StatelessComponentArgs<T> = T & { children?: React.ReactNode };

export const Remodal = ({
    children,
    isOpen,
    style,
}: StatelessComponentArgs<IRemodalProps>): React.ReactElement<IRemodalProps> => {
    return (
        <Overlay isOpen={isOpen} style={style.modalOverlay}>
            <Window style={style.modalWindow}>{children}</Window>
        </Overlay>
    );
};

Remodal.defaultProps = defaultProps;
