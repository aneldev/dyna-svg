import * as React from "react";

import "./index.less";

export interface IDynaSvgProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  src: string;
  [propsName: string]: any;
}

export class DynaSvg extends React.Component<IDynaSvgProps, {}> {
  public render(): JSX.Element {
    const {className, src, style} = this.props;
    let props = {...this.props};
    delete props.className;
    delete props.src;

    return (
      <div
        className={className || 'dyna-svg-defaults'}
        {...props}
        style={{
          ...(style || {}),
          display: 'inline-block',
          fontSize: 0,
        }}
        dangerouslySetInnerHTML={{__html: src}}
      />
    );
  }
}
