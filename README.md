# About
Import svg images into the dom in to style and interact with it's nodes.

Written in typescript, runs everywhere.

# Documentation
_is pending_

See the showcase example in the /dev/scripts/showcase-tsx

`npm start` to see the example.

# Setup

In webpack loaders of your app, you should use the `svg-inline-loader` as below.

```
  {
    test: /\.svg$/, loader: 'svg-inline-loader'
  },
```