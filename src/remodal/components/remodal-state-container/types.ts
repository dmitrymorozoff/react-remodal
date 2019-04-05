type ToggleRemodalFunction = () => void;
type OpenRemodalFunction = () => void;
type CloseRemodalFunction = () => void;

export interface IRemodalContainerState {
    isOpen: boolean;
}

export interface IRemodalStateContainerChildrenProps extends IRemodalContainerState {
    toggleRemodal: ToggleRemodalFunction;
    openRemodal: OpenRemodalFunction;
    closeRemodal: CloseRemodalFunction;
}

type RemodalStateContainerChildren = (props: IRemodalStateContainerChildrenProps) => React.ReactNode;

export interface IRemodalContainerProps {
    children: RemodalStateContainerChildren;
}
