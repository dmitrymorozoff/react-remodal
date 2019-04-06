import * as React from "react";
import styled from "styled-components";
import { ICloseButtonProps } from "./types";

const StyledCloseButton = styled.span`
    position: absolute;
    cursor: pointer;
    top: 20px;
    right: 20px;
    width: ${(props: ICloseButtonProps) => props.closeButtonSize}px;
    height: ${(props: ICloseButtonProps) => props.closeButtonSize}px;
    &:before,
    &:after {
        position: absolute;
        content: "";
        height: 1px;
        width: 100%;
        top: 50%;
        left: 0;
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

export const CloseButton: React.SFC<ICloseButtonProps> = (props: ICloseButtonProps): any => {
    const { customCloseIcon: CustomCloseIcon } = props;
    const newProps: ICloseButtonProps = Object.assign({}, props);
    delete newProps.customCloseIcon;
    delete newProps.closeButtonSize;

    return (
        (CustomCloseIcon && React.cloneElement(CustomCloseIcon, { ...newProps })) || (
            <StyledCloseButton {...props} />
        )
    );
};

CloseButton.displayName = "CloseButton";
