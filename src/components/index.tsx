import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    color: red;
`;

interface IProps {
    size?: number;
}

export class Remodal extends React.Component<IProps, {}> {
    public static defaultProps: Partial<IProps> = {
        size: 180,
    };

    public render() {
        return <Wrapper>Remodal</Wrapper>;
    }
}
