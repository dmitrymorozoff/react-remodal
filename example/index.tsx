import * as React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom";
import { Remodal, RemodalProvider, useRemodal } from "../src";

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
                <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ea nemo. Dignissimos
                    minima nostrum beatae pariatur porro repellat, ipsam eveniet eligendi vitae suscipit culpa
                    quam nam illum dicta ducimus quo ad numquam, corrupti eius cum quos! Sunt ipsa, veritatis
                    reprehenderit labore fugit porro excepturi omnis sint repudiandae magnam distinctio non
                    necessitatibus rem consectetur eum molestias sed qui eos corrupti nostrum ut quasi.
                    Doloremque sit ut cupiditate numquam ab facere velit minus totam. Dolorem aliquid
                    consequuntur maxime debitis consectetur soluta ullam sint architecto temporibus odio rem,
                    adipisci nisi nemo, et fugit ipsum omnis facere praesentium consequatur incidunt!
                    Veritatis assumenda quaerat, optio porro numquam soluta, fuga consectetur, rem animi
                    tempore velit voluptatem exercitationem illum perferendis delectus earum! Quae, maiores
                    ipsa aspernatur provident perspiciatis distinctio, debitis impedit temporibus fugiat
                    voluptas molestias illo magnam rerum blanditiis consequatur dicta et autem! Officiis amet
                    quam, ipsum sequi mollitia alias repellat sit earum commodi, nesciunt quae. Doloremque
                    laborum ipsam, quo repellendus provident corporis optio debitis itaque perspiciatis
                    facilis distinctio laudantium voluptates praesentium asperiores perferendis! Nihil
                    explicabo earum eligendi, inventore neque, adipisci iste cupiditate vel laboriosam
                    pariatur reiciendis? Non eveniet ipsam deserunt! Cum, maxime, et nostrum voluptates soluta
                    ipsum, quae doloremque corporis totam veniam pariatur id nihil obcaecati?
                </div>
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
