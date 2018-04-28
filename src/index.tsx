import * as React from "react";

import "./index.less";

export interface IDynaSvgProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  src: string;
}

export class DynaSvg extends React.Component<IDynaSvgProps, {}> {
  static defaultProps: IDynaSvgProps = {
    className: '',
    src: null,
  };
  public render(): JSX.Element {
    const {className: userClassName, src, style} = this.props;
    let props = {...this.props};
    delete props.className;
    delete props.src;

    const className: string = [
      'dyna-svg',
      userClassName,
      (userClassName || style) ? '' : 'dyna-svg-defaults',
    ].join(' ').trim();

    return (
      <div
        className={className}
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
