shuffle
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Shuffles array elements in place.

This module implements the [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) (a.k.a. the Knuth shuffle) to generate a random permutation of a finite set of `array` elements.


## Installation

``` bash
$ npm install compute-shuffle
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var shuffle = require( 'compute-shuffle' );
```

#### shuffle( arr )

Mutates the input `array` to generate a random permutation of `array` elements.

``` javascript
shuffle( [ 1, 2, 3 ] );
```


## Examples

``` javascript
var shuffle = require( 'compute-shuffle' );

var data = new Array( 20 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = i;
}

var copy;
for ( var j = 0; j < 10; j++ ) {
	copy = data.slice();
	shuffle( copy );
	console.log( copy );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Notes

Beware of implementations on NPM and elsewhere which use bitwise operators to floor numeric values. When using bitwise operators, numeric values are converted to 32-bit integers. For large numeric values, you will experience unexpected results. While not a concern for this algorithm, bitwise operators also produce unexpected results when used on negative numeric values.




## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-shuffle.svg
[npm-url]: https://npmjs.org/package/compute-shuffle

[travis-image]: http://img.shields.io/travis/compute-io/shuffle/master.svg
[travis-url]: https://travis-ci.org/compute-io/shuffle

[coveralls-image]: https://img.shields.io/coveralls/compute-io/shuffle/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/shuffle?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/shuffle.svg
[dependencies-url]: https://david-dm.org/compute-io/shuffle

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/shuffle.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/shuffle

[github-issues-image]: http://img.shields.io/github/issues/compute-io/shuffle.svg
[github-issues-url]: https://github.com/compute-io/shuffle/issues