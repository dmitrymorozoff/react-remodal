import styled, { css } from "styled-components";
import { IModalProps } from "./types";

const notScrollableStyles = css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const scrollableStyles = css`
    position: relative;
    margin: 50px auto;
`;

export const Modal = styled.div`
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
    ${(props: IModalProps) => {
        if (props.isScrollable && !props.isFullScreen) {
            return scrollableStyles;
        }
        if (!props.isFullScreen) {
            return notScrollableStyles;
        }
    }}
`;
