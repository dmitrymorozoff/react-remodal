import * as React from "react";
import * as ReactDOM from "react-dom";
import { Remodal } from "../src";

interface IState {
    value: number;
}

export class App extends React.Component<{}, IState> {
    public render() {
        return (
            <div className="container">
                <Remodal />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
