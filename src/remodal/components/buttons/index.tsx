import { darken } from "polished";
import * as React from "react";
import styled from "styled-components";
import { IButtonItemProps, RemodalType } from "../../types";
import { IButtonProps, IButtonsProps, StatelessComponentArgs } from "./types";

enum RemodalTypeColors {
    default = "#ececf1",
    success = "#66cdaa",
    warning = "#f4a460",
    error = "#ff6347",
    info = "#227ced",
}

export const getColor = (props: IButtonProps) => {
    switch (props.type) {
        case RemodalType.success:
            return RemodalTypeColors.success;
        case RemodalType.warning:
            return RemodalTypeColors.warning;
        case RemodalType.error:
            return RemodalTypeColors.error;
        case RemodalType.info:
            return RemodalTypeColors.info;
        default:
            return RemodalTypeColors.default;
    }
};

export const ButtonsWrapper = styled.div`
    font-size: inherit;
    display: flex;
    flex: 0 1 auto;
    width: 100%;
    padding-top: 0px;
    box-sizing: border-box;
`;

export const Button: React.FC<IButtonProps & React.HTMLProps<HTMLButtonElement>> = styled.button`
    padding: 0;
    margin: 0;
    border: 0;
    cursor: pointer;
    box-sizing: border-box;
    line-height: 65px;
    height: 65px;
    text-transform: uppercase;
    outline: none;
    font-size: inherit;
    font-family: inherit;
    flex: ${(props: IButtonProps) => `1 1 ${100 / props.size}%`};
    transition: 0.2s;
    background-color: ${(props: IButtonProps) => getColor(props)};
    color: #000;
    &:hover {
        background-color: ${(props: IButtonProps) => darken(0.05, getColor(props))};
    }
    &:active {
        background-color: ${(props: IButtonProps) => darken(0.1, getColor(props))};
    }
`;

Button.displayName = "Button";

export const Buttons = ({
    type,
    buttons,
    buttonStyle,
    buttonsWrapperStyle,
    className,
    buttonClassName,
}: StatelessComponentArgs<IButtonsProps>) => {
    if (!Array.isArray(buttons)) {
        return null;
    }

    const countButtons = buttons.length;
    const buttonSize = 100 / countButtons;

    return (
        <ButtonsWrapper style={buttonsWrapperStyle} className={className}>
            {buttons.map(({ title, handler }: IButtonItemProps, index: number) => {
                return (
                    <Button
                        type={type}
                        size={buttonSize}
                        onClick={handler}
                        key={index.toString()}
                        style={buttonStyle}
                        className={buttonClassName}
                    >
                        {title}
                    </Button>
                );
            })}
        </ButtonsWrapper>
    );
};

Buttons.displayName = "Buttons";
