import * as React from "react";

import "./index.less";

export interface IDynaSvgProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  src: string;
  width?: number;

  [propsName: string]: any;
}

export class DynaSvg extends React.Component<IDynaSvgProps, {}> {
  public render(): JSX.Element {
    const {className, src, style, width} = this.props;
    let props = {...this.props};
    delete props.src;
    delete props.width;

    return (
      <div
        className={className || 'dyna-svg-defaults'}
        {...props}
        style={{
          ...(style || {}),
          display: 'inline-block',
          fontSize: 0,
          width: width === undefined || null ? undefined : width + 'px',
        }}
        dangerouslySetInnerHTML={{__html: src}}
      />
    );
  }
}
