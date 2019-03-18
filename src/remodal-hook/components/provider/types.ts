import * as React from "react";

export interface IRemodalProvider {
    children: React.ReactNode;
}

export type RemodalProviderState = Record<string, React.ComponentType<any>>;
