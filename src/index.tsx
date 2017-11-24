import * as React from "react";

export interface IDynaSvgProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  width: number;
  height: number;

  [propsName: string]: any;
}

export class DynaSvg extends React.Component<IDynaSvgProps, {}> {
  static defaultProps: IDynaSvgProps = {
    src: null,
    width: 10,
    height: 10,
  };

  public render(): JSX.Element {
    const {src, style, width, height} = this.props;
    let props = {...this.props};
    delete props.src;
    delete props.width;
    delete props.height;

    return (
      <div
        {...props}
        style={{
          ...(style || {}),
          display: 'inline-block',
          width: width + 'px',
          height: height + 'px'
        }}
        dangerouslySetInnerHTML={{__html: src}}
      />
    );
  }
}
