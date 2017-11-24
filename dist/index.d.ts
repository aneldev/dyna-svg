import * as React from "react";
export interface IDynaSvgProps extends React.HTMLAttributes<HTMLDivElement> {
    src: string;
    width: number;
    height: number;
    [propsName: string]: any;
}
export declare class DynaSvg extends React.Component<IDynaSvgProps, {}> {
    static defaultProps: IDynaSvgProps;
    render(): JSX.Element;
}
