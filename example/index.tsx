import * as React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom";
// import { ModalProvider, useModal } from "react-modal-hook";
import { Remodal, RemodalProvider, useRemodal } from "../src";

interface IState {
    isOpenModal: boolean;
}

export const App = () => {
    const [openRemodal1, closeRemodal1] = useRemodal(() => (
        <Remodal isOpen={true} onClose={closeRemodal1}>
            2
        </Remodal>
    ));

    const [openRemodal2, closeRemodal2] = useRemodal(() => (
        <Remodal isOpen={true} onClose={closeRemodal2}>
            1
            <button className="btn" onClick={openRemodal1}>
                Open Modal 2
            </button>
        </Remodal>
    ));
    console.log({ openRemodal1, openRemodal2 });
    return (
        <div className="container">
            <button className="btn" onClick={openRemodal2}>
                Open Modal
            </button>
        </div>
    );
};

ReactDOM.render(
    <RemodalProvider>
        <App />
    </RemodalProvider>,
    document.getElementById("root"),
);
