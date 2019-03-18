import * as React from "react";
import ReactDOM = require("react-dom");
import { IRemodalRootProps } from "./types";

export const RemodalRoot = React.memo(({ modals }: IRemodalRootProps) => {
    const allModalsIds = Object.keys(modals);
    return ReactDOM.createPortal(
        <React.Fragment>
            {allModalsIds.map((id: string) => {
                const Remodal = modals[id];
                return <Remodal key={id} />;
            })}
        </React.Fragment>,
        document.body,
    );
});
