import styled from "styled-components";
import { IOuterProps } from "./types";

export const Outer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${(props: IOuterProps) => (props.isOpen ? "1" : "0")};
    visibility: ${(props: IOuterProps) => (props.isOpen ? "visible" : "hidden")};
    overflow: auto;
    z-index: 1;
`;
