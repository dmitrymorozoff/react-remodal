import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getUniqueId } from "../../utils/get-unique-id";
import { RemodalContext } from "../context";
import { UseRemodalReturnValue } from "./types";

export const useRemodal = (
    remodalComponent: React.ComponentType<any>,
    inputs: any[] = [],
): UseRemodalReturnValue => {
    const [isOpen, setOpen] = useState(false);
    const memoizedRemodalComponent = useMemo(() => remodalComponent, inputs);
    const remodalContext = useContext(RemodalContext);
    const openModal = useCallback(() => setOpen(true), []);
    const closeModal = useCallback(() => setOpen(false), []);
    const uniqueId = useMemo(getUniqueId, []);

    useEffect(() => {
        if (isOpen) {
            remodalContext.openModal(memoizedRemodalComponent, uniqueId);
        } else {
            remodalContext.closeModal(uniqueId);
        }
        return () => remodalContext.closeModal(uniqueId);
    }, [remodalComponent, isOpen]);

    return [openModal, closeModal];
};
