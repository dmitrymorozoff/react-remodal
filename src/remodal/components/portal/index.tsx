import * as React from "react";
import * as ReactDOM from "react-dom";
import { defaultProps, IRemodalPortalProps } from "./types";

export class Portal extends React.Component<IRemodalPortalProps, {}> {
    public static defaultProps: Partial<IRemodalPortalProps> = defaultProps;

    public parentElement = document.body;
    public node: Element;

    public constructor(props: IRemodalPortalProps) {
        super(props);
        this.node = document.createElement("div");
    }

    public componentDidMount() {
        const { portalClassName } = this.props;
        this.node.className = portalClassName;
        this.parentElement.appendChild(this.node);
    }

    public componentWillUnmount() {
        this.parentElement.removeChild(this.node);
    }

    public render() {
        const { children } = this.props;
        return ReactDOM.createPortal(children, this.node);
    }
}
