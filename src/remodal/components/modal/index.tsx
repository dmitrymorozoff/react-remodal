import styled, { css } from "styled-components";
import { IModalProps } from "./types";

const notScrollableStyles = css`
    margin: auto;
`;

const scrollableStyles = css`
    position: relative;
    margin: 50px auto;
`;

export const Modal = styled.div`
    position: relative;
    background: white;
    max-width: none;
    width: ${(props: IModalProps) => (props.isFullScreen ? "100%" : "525px")};
    height: ${(props: IModalProps) => (props.isFullScreen ? "100%" : "auto")};
    outline: none;
    z-index: 2;
    font-size: 18px;
    border-radius: ${(props: IModalProps) => (props.isFullScreen ? "0" : "2px")};
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    border: 1px solid #e1dfdf;
    border-bottom: 0;
    transition: ${(props: IModalProps) => (props.closeTimeoutMS ? `${props.closeTimeoutMS}ms` : 0)};
    transform: ${(props: IModalProps) => {
        let trans = "translateX(-100%)";
        if (props.isAfterOpen) {
            trans = "translateX(0)";
        }
        if (props.isBeforeClose) {
            trans = "translateX(100%)";
        }
        return trans;
    }};
    opacity: ${(props: IModalProps) => {
        let trans = "0";
        if (props.isAfterOpen) {
            trans = "1";
        }
        if (props.isBeforeClose) {
            trans = "0";
        }
        return trans;
    }};
    ${(props: IModalProps) => {
        if (props.isScrollable && !props.isFullScreen) {
            return scrollableStyles;
        }
        if (!props.isFullScreen) {
            return notScrollableStyles;
        }
    }};
`;

Modal.displayName = "Modal";
