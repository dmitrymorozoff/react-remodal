const cx = require("classnames");
import { darken } from "polished";
import * as React from "react";
import styled from "styled-components";
import { IButtonItemProps } from "../../types";
import { BASE_CLASSNAME } from "../../vars";
import { IButtonProps, IButtonsProps, StatelessComponentArgs } from "./types";

enum StatusColor {
    Success = "#66cdaa",
    Warning = "#f4a460",
    Error = "#ff6347",
}

export const ButtonsWrapper = styled.div`
    font-size: inherit;
    display: flex;
    flex: 0 1 auto;
    width: 100%;
    padding-top: 0px;
    box-sizing: border-box;
`;

export const Button = styled.button`
    background: transparent;
    padding: 0;
    margin: 0;
    border: 0;
    cursor: pointer;
    box-sizing: border-box;
    line-height: 60px;
    height: 60px;
    text-transform: uppercase;
    color: inherit;
    outline: none;
    font-size: inherit;
    font-family: inherit;
    flex: ${(props: IButtonProps) => `1 1 ${100 / props.size}%`};
    transition: 0.2s;
    background-color: #66cdaa;
    border-bottom: 4px solid ${darken(0.125, "#66cdaa")};
    color: #fff;
    &:hover {
        background-color: ${darken(0.05, "#66cdaa")};
    }
    &:active {
        background-color: ${darken(0.1, "#66cdaa")};
    }
    &:not(:first-of-type) {
        border-left: 1px solid ${darken(0.125, "#66cdaa")};
    }
`;

export const Buttons = ({
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
            })}
        >
            {buttons.map(({ title, handler }: IButtonItemProps, index: number) => {
                return (
                    <Button
                        size={buttonSize}
                        onClick={handler}
                        key={index.toString()}
                        style={buttonStyle}
                        className={cx(`${BASE_CLASSNAME}__button`, {
                            [`${BASE_CLASSNAME}__button_open`]: open,
                        })}
                    >
                        {title}
                    </Button>
                );
            })}
        </ButtonsWrapper>
    );
};
