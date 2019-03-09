import * as React from "react";
import styled from "styled-components";
import { FullScreenIcon } from "./icon";
import { IFullScreenButtonProps } from "./types";

const StyledFullScreenButton = styled.span`
    position: absolute;
    cursor: pointer;
    top: 16px;
    right: 48px;
    width: ${(props: IFullScreenButtonProps) => props.fullScreenButtonSize}px;
    height: ${(props: IFullScreenButtonProps) => props.fullScreenButtonSize}px;
`;

export const FullScreenButton: React.SFC<IFullScreenButtonProps> = (props: IFullScreenButtonProps): any => {
    const { customFullScreenIcon: CustomFullScreenIcon, fullScreenButtonSize } = props;
    return (
        (CustomFullScreenIcon && React.cloneElement(CustomFullScreenIcon, { ...props })) || (
            <StyledFullScreenButton {...props}>
                <FullScreenIcon size={fullScreenButtonSize} />
            </StyledFullScreenButton>
        )
    );
};
