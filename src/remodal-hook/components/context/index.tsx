import * as React from "react";
import { IRemodalContext } from "./types";

export const RemodalContext = React.createContext<IRemodalContext>({
    openModal: () => {},
    closeModal: () => {},
});
