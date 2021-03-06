# About
Import svg images into the dom in to style and interact with it's nodes.

Written in typescript, runs everywhere.

# Demo

- `npm install` (if you didn't)
- `npm start` to see the demo

# Install

1. `npm install --save dyna-svg`

2. `npm install --save-dev svg-inline-loader`

3. In webpack loaders of your app, you should add the `svg-inline-loader` as below.

```
  {
    test: /\.svg$/, loader: 'svg-inline-loader'
  },
```

4. If you have already a loader for `svg` maybe there is need to disable it for the `svg` files. 

# Use

Imports the `svg` as dom element to style the contents of or animate them.

# Examples

## Use without any style 
```
		const svgIcon = require('./assets/svg-file-format-variant.svg');
		...
		<DynaSvg src={svgIcon} />
```
The default width is applied from the `dyna-svg-defaults` size `63.4477px` indicating that you didn't define a style. 

## Use with css class 
```
		const svgIcon = require('./assets/svg-file-format-variant.svg');
		...
		<DynaSvg className="my-nice-svg" src={svgIcon} />
```
Similar your can use css modules

_Much better_

## Style it from js 
```
		const svgIcon = require('./assets/svg-file-format-variant.svg');
		...
		<DynaSvg src={svgIcon} style={{width: '150px'}} />
```
_Awesome tiger_

