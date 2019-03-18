import styled, { css } from "styled-components";
import { IOuterProps } from "./types";

const fullScreenStyles = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Outer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    z-index: 1;
    opacity: ${(props: IOuterProps) => (props.isOpen ? "1" : "0")};
    visibility: ${(props: IOuterProps) => (props.isOpen ? "visible" : "hidden")};
    transition: ${(props: IOuterProps) => props.animationDuration}ms;
    transition-timing-function: ease-out;
    perspective: 1000px;
    background: rgba(0, 0, 0, 0.75);
    ${(props: IOuterProps) => props.isFullScreen && fullScreenStyles}
`;
