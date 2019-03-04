import { useEffect } from "react";
import * as ReactDOM from "react-dom";
import { defaultProps, IRemodalPortalProps, StatelessComponentArgs } from "./types";

export const Portal = ({ children, portalClassName }: StatelessComponentArgs<IRemodalPortalProps>) => {
    const node = document.createElement("div");
    const parentElement = document.body;

    useEffect(() => {
        node.className = portalClassName;
        parentElement.appendChild(node);
        return () => {
            parentElement.removeChild(node);
        };
    });

    return ReactDOM.createPortal(children, node);
};

Portal.defaultProps = defaultProps;
