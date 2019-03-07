import styled, { css } from "styled-components";
import { IModalProps } from "./types";

const slideDown = css`
    transform: translate3d(-50%, -51%, 0) rotateX(0deg);
`;

const notScrollableStyles = css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, 51%, 0) rotateX(-45deg);
    transition-duration: ${(props: IModalProps) => props.animationDuration}ms;
    transition-timing-function: ease-out;
    ${(props: IModalProps) => props.isOpen && slideDown};
`;

const scrollableStyles = css`
    position: relative;
    margin: 50px auto;
`;

export const Modal = styled.div`
    background: white;
    width: 500px;
    height: auto;
    outline: none;
    z-index: 2;
    border: 2px solid #000;
    font-size: 18px;
    backface-visibility: hidden;
    ${(props: IModalProps) => (props.isScrollable ? scrollableStyles : notScrollableStyles)};
`;
