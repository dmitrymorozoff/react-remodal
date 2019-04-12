import * as React from "react";
// import { useState } from "react";
import * as ReactDOM from "react-dom";
import { Remodal, RemodalProvider /*useRemodal*/ } from "../src";

// export const App = () => {
//     const [isOpen, openRemodal, closeRemodal] = useRemodal(() => (
//         <Remodal isOpen={isOpen} onClose={closeRemodal}>
//             Clicking yes will make Comic Sans you new system default font. Seriously have you thought this
//             through?
//         </Remodal>
//     ));

//     return (
//         <div className="container">
//             <button className="btn" onClick={openRemodal}>
//                 Open Modal
//             </button>
//         </div>
//     );
// };

interface IProps {}

interface IState {
    isOpen: boolean;
}

export class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    public openModal = () => {
        this.setState({
            isOpen: true,
        });
    };

    public closeModal = () => {
        this.setState({
            isOpen: false,
        });
    };

    public render() {
        const { isOpen } = this.state;

        return (
            <div className="container">
                <Remodal isOpen={isOpen} onClose={this.closeModal}>
                    Clicking yes will make Comic Sans you new system default font. Seriously have you thought
                    this through?
                </Remodal>
                <button className="btn" onClick={this.openModal}>
                    Open Modal
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <RemodalProvider>
        <App />
    </RemodalProvider>,
    document.getElementById("root"),
);
