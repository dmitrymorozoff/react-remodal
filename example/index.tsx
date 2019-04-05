import * as React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom";
// import { ModalProvider, useModal } from "react-modal-hook";
import { Remodal, RemodalProvider, useRemodal } from "../src";

export const App = () => {
    const [openRemodal, closeRemodal] = useRemodal(() => (
        <Remodal isOpen={true} onClose={closeRemodal}>
            Clicking yes will make Comic Sans you new system default font. Seriously have you thought this
            through?
        </Remodal>
    ));

    return (
        <div className="container">
            <button className="btn" onClick={openRemodal}>
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
