import * as React from "react";
import * as ReactDOM from "react-dom";
import { Remodal } from "../src";

interface IState {
    isOpenModal: boolean;
}

export class App extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpenModal: false,
        };
    }

    public onOpenModalHandler = () => {
        this.setState({
            isOpenModal: true,
        });
    };

    public onCloseModalHandler = () => {
        this.setState({
            isOpenModal: false,
        });
    };

    public render() {
        const { isOpenModal } = this.state;
        return (
            <div className="container">
                <button className="btn" onClick={this.onOpenModalHandler}>
                    Open Modal
                </button>
                <Remodal isOpen={isOpenModal} onClose={this.onCloseModalHandler}>
                    Remodal
                </Remodal>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
