export interface IRemodalContext {
    openModal: (newModal: React.ComponentType<any>, newModalId: string) => void;
    closeModal: (removedModalId: string) => void;
}
