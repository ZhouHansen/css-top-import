# css-top-import [![stability][0]][1]
 [![npm version][2]][3] [![downloads][4]][5]
 ![travis build][6]
 
put `@import url(...)` to the top of css

## usage

```css
/* before */
pre {
  position: relative;
  line-height: 0 !important;
  border: 1px solid;
  border-left: 6px solid;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

@import url('http://fonts.googleapis.com/css?family=Lato');
```

```js
  // run
  var cssTopImport = require('css-top-import')
  cssTopImport(src, result => {
    console.log(result)
  })
```


```css
/* after */
@import url('http://fonts.googleapis.com/css?family=Lato');

pre {
  position: relative;
  line-height: 0 !important;
  border: 1px solid;
  border-left: 6px solid;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
```

## api
### cssTopImport(src, done)
###### src
css source
###### done(result)
called with the compiled css

## why
e.g. import web font from google api, you need to put the `@import` statement top of the css in order to work out.

## license
MIT

[0]: https://img.shields.io/badge/stability-stable-green.svg
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/css-top-import.svg?style=flat-square
[3]: https://npmjs.org/package/css-top-import
[4]: http://img.shields.io/npm/dm/css-top-import.svg?style=flat-square
[5]: https://npmjs.org/package/css-top-import
[6]: https://travis-ci.org/ZhouHansen/css-top-import.svg?branch=master
