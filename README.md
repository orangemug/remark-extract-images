# remark-extract-images
Extract images from a [mdast](https://github.com/syntax-tree/mdast) syntax tree

[![stability-unstable](https://img.shields.io/badge/stability-unstable-yellow.svg)][stability]
[![Build Status](https://circleci.com/gh/orangemug/remark-extract-images.png?style=shield)][circleci]

[stability]:   https://github.com/orangemug/stability-badges#unstable
[circleci]:    https://circleci.com/gh/orangemug/remark-extract-images


Also the library supports referenced images, for example

```
![An image][img_ref]

...

[img_ref]: image.png
```


## Install
To install

```
npm install orangemug/remark-extract-images --save
```


## Usage
Example usage

```js
var remark        = require("remark");
var extractImages = require("remark-extract-images");

var ast = remark().parse("![An image][image]\n[image]: image.png\n")
var images = extractImages(ast);
assert.deepEqual(images, [
  {
    alt: "An image",
    url: "image.png"
  }
])
```


## License
[MIT](LICENSE)
