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
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    overflow: auto;
    z-index: 1;
    opacity: ${(props: IOuterProps) => (props.isOpen ? "1" : "0")};
    visibility: ${(props: IOuterProps) => (props.isOpen ? "visible" : "hidden")};
    background: #26273580;
    transition: ${(props: IOuterProps) => (props.closeTimeoutMS ? `${props.closeTimeoutMS}ms` : 0)};
    ${(props: IOuterProps) => props.isFullScreen && fullScreenStyles}
`;

Outer.displayName = "Outer";
