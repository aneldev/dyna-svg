import * as React from 'react';
import {DynaSvg} from "../../src/";

import {faIcon, IShowcase} from "dyna-showcase";
import {Logo} from "./Logo";

const svgIcon: string = require('./assets/svg-file-format-variant.svg');

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
      slug: 'plain-button',
      faIconName: 'flask',
      title: 'plain button',
      description: 'The use plain button',
      center: true,
      component: (
        <DynaSvg
          style={{cursor:'pointer'}}
          src={svgIcon}
          width={100}
          height={100}
          onClick={() => alert('svg clicked')}
        />
      ),
    },
  ]
}as IShowcase;
