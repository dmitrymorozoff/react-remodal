import * as React from "react";
import { IFullScreenIconProps } from "./types";

export const FullScreenIcon: React.SFC<IFullScreenIconProps> = ({ size }: IFullScreenIconProps) => {
    return (
        <svg width={`${size}px`} height={`${size}px`} preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15">
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g fill="#000000">
                    <g>
                        <path
                            d="M2,9 L0,9 L0,14 L5,14 L5,12 L2,12 L2,9 L2,9 Z M0,5 L2,5 L2,2 L5,2 L5,0 L0,0 L0,5 L0,5 Z M12,12 L9,12 L9,14 L14,14 L14,9 L12,9 L12,12 L12,12 Z M9,0 L9,2 L12,2 L12,5 L14,5 L14,0 L9,0 L9,0 Z"
                            id="Shape"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};
