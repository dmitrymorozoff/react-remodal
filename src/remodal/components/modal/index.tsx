import styled, { css } from "styled-components";
import { IModalProps } from "./types";

const notScrollableStyles = css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    font-size: 18px;
    border: 2px solid #000;
    ${(props: IModalProps) => (props.isScrollable ? scrollableStyles : notScrollableStyles)};
`;
