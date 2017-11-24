import * as React from 'react';
import {faIcon} from "dyna-showcase";

const styles = require('./Logo.less');

export const Logo= ()=>(
  <div className={styles.container}>
    <div className={styles.logo}>
      {faIcon('cubes')}
    </div>
    <div className={styles.texts}>
      <div className={styles.line1}>dyna svg</div>
      <div className={styles.line2}>import svg in react</div>
    </div>
  </div>

);
