import styled from "styled-components";
import { ICloseButtonProps } from "./types";

export const CloseButton = styled.span`
    position: absolute;
    cursor: pointer;
    top: 16px;
    right: 16px;
    width: ${(props: ICloseButtonProps) => props.closeButtonSize}px;
    height: ${(props: ICloseButtonProps) => props.closeButtonSize}px;
    &:before,
    &:after {
        position: absolute;
        content: "";
        height: 2px;
        width: 100%;
        top: 50%;
        left: 0;
        margin-top: -1px;
        background: #000;
        transition: 0.2s;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`;
