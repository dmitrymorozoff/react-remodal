import * as React from "react";
import { useMemo, useState } from "react";
import { RemodalContext } from "../context";
import { RemodalRoot } from "../remodal-root";
import { IRemodalProvider, RemodalProviderState } from "./types";

export const RemodalProvider = ({ children }: IRemodalProvider) => {
    const [modals, setModal] = useState<RemodalProviderState>({});

    const setOpenModalCallback = (newModal: React.ComponentType<any>, newModalId: string) => (
        prevModals?: RemodalProviderState,
    ) => ({
        ...prevModals,
        [newModalId]: newModal,
    });

    const openModal = (newModal: React.ComponentType<any>, newModalId: string) =>
        setModal(setOpenModalCallback(newModal, newModalId));

    const setCloseModalCallback = (removedModalId: string) => (prevModals?: RemodalProviderState) => {
        const copyModals: RemodalProviderState = Object.assign({}, prevModals);
        delete copyModals[removedModalId];
        return copyModals;
    };

    const closeModal = (removedModalId: string) => setModal(setCloseModalCallback(removedModalId));

    return (
        <RemodalContext.Provider value={useMemo(() => ({ openModal, closeModal }), [])}>
            <React.Fragment>
                {children} <RemodalRoot modals={modals} />
            </React.Fragment>
        </RemodalContext.Provider>
    );
};
