import * as React from "react";
import { IRemodalContainerProps, IRemodalContainerState, IRemodalStateContainerChildrenProps } from "./types";

export class RemodalStateContainer extends React.Component<IRemodalContainerProps, IRemodalContainerState> {
    constructor(props: IRemodalContainerProps) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    public toggleRemodal = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    public openRemodal = () => {
        this.setState({
            isOpen: true,
        });
    };

    public closeRemodal = () => {
        this.setState({
            isOpen: false,
        });
    };

    public render() {
        return this.props.children({
            toggleRemodal: this.toggleRemodal,
            openRemodal: this.openRemodal,
            closeRemodal: this.closeRemodal,
            setState: this.setState.bind(this),
            ...this.state,
        } as IRemodalStateContainerChildrenProps);
    }
}
