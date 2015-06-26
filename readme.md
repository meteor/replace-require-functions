# replace-require-function [![Build Status](https://travis-ci.org/meteor/replace-require-function.svg?branch=master)](https://travis-ci.org/meteor/replace-require-function)

> Replace the require function for certain modules


## Install

```
$ npm install --save replace-requires
```


## Usage

```js
var replaceRequires = require('replace-requires');

replaceRequires('require("foo")', {foo: 'bar'});
//=> bar
```

## API

#### `replaceRequires(code, replacements)` -> `string`

##### code

*Required*  
Type: `string`

The code to parse and replace.

##### replacements

*Required*  
Type: `object`

The replacements, where keys are module ids and the corresponding values are the replacements for their require statements.


## License

MIT © [Ben Drucker](http://bendrucker.me)
