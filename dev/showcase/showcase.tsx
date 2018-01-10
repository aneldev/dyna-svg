import * as React from 'react';
import {DynaSvg} from "../../src";

import {IShowcase} from "dyna-showcase";
import {Logo} from "../logo";

const svgIcon: string = require('./assets/svg-file-format-variant.svg');
const styles: any = require('./svgExampleStyles.module.less');

require('./showcase.less');

export default {
  logo: <Logo/>,
  views: [
    {
      slug: 'intro',
      faIconName: 'circle-o-notch',
      title: 'Introduction',
      center: true,
      component: (
        <div>
          <h3>dyna svg</h3>
          <h4>react svg image component</h4>
          <p>An easy way to import svg images as elements</p>
        </div>
      ),
    },
    {
      slug: 'svg-icon-without-style',
      faIconName: 'flask',
      title: 'without styles',
      description: 'svg icon rendered with default style',
      center: true,
      component: (
        <DynaSvg
          src={svgIcon}
          onClick={() => alert('svg clicked')}
        />
      ),
    },
    {
      slug: 'svg-icon-without-style-from-class',
      faIconName: 'flask',
      title: 'with style from class',
      description: 'svg icon rendered with styles passed from css class',
      center: true,
      component: (
        <DynaSvg
          className={styles.svgIcon}
          src={svgIcon}
          onClick={() => alert('svg clicked')}
        />
      ),
    },
    {
      slug: 'svg-icon-without-style-from-js',
      faIconName: 'flask',
      title: 'with style from props (js)',
      description: 'svg icon rendered with styles passed style of the DynaSvg',
      center: true,
      component: (
        <DynaSvg
          src={svgIcon}
          style={{width: '150px'}}
          onClick={() => alert('svg clicked')}
        />
      ),
    },
  ]
}as IShowcase;
