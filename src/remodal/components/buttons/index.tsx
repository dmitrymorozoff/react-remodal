const cx = require("classnames");
import { darken } from "polished";
import * as React from "react";
import styled from "styled-components";
import { IButtonItemProps, RemodalType } from "../../types";
import { BASE_CLASSNAME } from "../../vars";
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

export const Button: React.SFC<IButtonProps & React.HTMLProps<HTMLButtonElement>> = styled.button`
    background: transparent;
    padding: 0;
    margin: 0;
    border: 0;
    cursor: pointer;
    box-sizing: border-box;
    line-height: 65px;
    height: 65px;
    text-transform: uppercase;
    color: inherit;
    outline: none;
    font-size: inherit;
    font-family: inherit;
    flex: ${(props: IButtonProps) => `1 1 ${100 / props.size}%`};
    transition: 0.2s;
    background-color: ${(props: IButtonProps) => getColor(props)};
    /* border-bottom: 4px solid ${(props: IButtonProps) => darken(0.125, getColor(props))}; */
    color: #000;
    &:hover {
        background-color: ${(props: IButtonProps) => darken(0.05, getColor(props))};
    }
    &:active {
        background-color: ${(props: IButtonProps) => darken(0.1, getColor(props))};
    }
    &:not(:first-of-type) {
        /* border-left: 1px solid ${(props: IButtonProps) => darken(0.125, getColor(props))}; */
        /* margin-left: 10px; */
    }
`;

Button.displayName = "Button";

export const Buttons = ({
    type,
    buttons,
    buttonStyle,
    buttonsWrapperStyle,
}: StatelessComponentArgs<IButtonsProps>) => {
    const countButtons = buttons.length;
    if (countButtons <= 0) {
        return null;
    }
    const buttonSize = 100 / countButtons;
    return (
        <ButtonsWrapper
            style={buttonsWrapperStyle}
            className={cx(`${BASE_CLASSNAME}__buttons`, {
                [`${BASE_CLASSNAME}__buttons_open`]: open,
                [`${BASE_CLASSNAME}__buttons_${type}`]: type,
            })}
        >
            {buttons.map(({ title, handler }: IButtonItemProps, index: number) => {
                return (
                    <Button
                        type={type}
                        size={buttonSize}
                        onClick={handler}
                        key={index.toString()}
                        style={buttonStyle}
                        className={cx(`${BASE_CLASSNAME}__button`, {
                            [`${BASE_CLASSNAME}__button_open`]: open,
                            [`${BASE_CLASSNAME}__button_${type}`]: type,
                        })}
                    >
                        {title}
                    </Button>
                );
            })}
        </ButtonsWrapper>
    );
};

Buttons.displayName = "Buttons";
