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
                <Remodal
                    isOpen={isOpenModal}
                    onClose={this.onCloseModalHandler}
                    customCloseIcon={<button>close</button>}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia natus, eum
                    non voluptatibus ratione, velit quidem itaque rem quam obcaecati saepe repellendus
                    voluptatem vitae ut doloremque rerum cupiditate eaque quisquam doloribus qui nisi minima!
                    Id, delectus modi? Nesciunt, voluptatum!
                </Remodal>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
