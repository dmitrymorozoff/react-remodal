import * as React from "react";
import styled from "styled-components";
import { IButtonItemProps } from "../../types";
import { IButtonProps, IButtonsProps, StatelessComponentArgs } from "./types";

export const ButtonsWrapper = styled.div`
    display: flex;
    flex: 0 1 auto;
    width: 100%;
    border-top: 1px solid #ddd;
`;

export const Button = styled.button`
    font-size: 14px;
    background: transparent;
    padding: 0;
    margin: 0;
    border: 0;
    cursor: pointer;
    box-sizing: border-box;
    line-height: 40px;
    height: 40px;
    color: inherit;
    font: inherit;
    outline: none;
    flex: ${(props: IButtonProps) => `1 1 ${100 / props.size}%`};
    transition: 0.2s;
    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
    &:active {
        background-color: rgba(0, 0, 0, 0.1);
    }
    &:not(:first-of-type) {
        border-left: 1px solid #ddd;
    }
`;

export const Buttons = ({ buttons }: StatelessComponentArgs<IButtonsProps>) => {
    const countButtons = buttons.length;
    if (countButtons <= 0) {
        return null;
    }
    const buttonSize = 100 / countButtons;
    return (
        <ButtonsWrapper>
            {buttons.map(({ title, handler }: IButtonItemProps, index: number) => {
                return (
                    <Button size={buttonSize} onClick={handler} key={index.toString()}>
                        {title}
                    </Button>
                );
            })}
        </ButtonsWrapper>
    );
};
