import * as React from "react";
import "./index.less";
export interface IDynaSvgProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    src: string;
}
export declare class DynaSvg extends React.Component<IDynaSvgProps, {}> {
    static defaultProps: IDynaSvgProps;
    render(): JSX.Element;
}
