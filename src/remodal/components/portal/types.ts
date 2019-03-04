export type StatelessComponentArgs<T> = T & { children?: React.ReactNode };

export interface IRemodalPortalProps {
    portalClassName: string;
}

const PORTAL_CLASSNAME = "remodal-portal";

export const defaultProps: IRemodalPortalProps = {
    portalClassName: PORTAL_CLASSNAME,
};
