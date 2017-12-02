import * as React from "react";
import "./index.less";
export interface IDynaSvgProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    src: string;
    [propsName: string]: any;
}
export declare class DynaSvg extends React.Component<IDynaSvgProps, {}> {
    render(): JSX.Element;
}
