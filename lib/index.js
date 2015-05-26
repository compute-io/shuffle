'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isBoolean = require( 'validate.io-boolean-primitive' );

// SHUFFLE //

/**
* FUNCTION: shuffle( arr[, copy ] )
*	Mutates an input `array` to generate a random permutation of `array` elements.
*
* @param {Array} arr - `array` to shuffle
* @param {Boolean} [copy=true] - boolean indicating whether to return a new array
* @returns {Array} the shuffled array
*/
function shuffle( arr, copy ) {

	if ( !isArray( arr ) ) {
		throw new TypeError( 'shuffle()::invalid input argument. Must provide an array. Value: `' + arr + '`.' );
	}
	if ( arguments.length > 1 ) {
		if ( !isBoolean( copy ) ) {
			throw new TypeError( 'shuffle()::invalid option. Copy argument must be a boolean primitive. Value: `' + copy + '`.' );
		}
	}

	if ( copy === undefined ) {
		copy = true;
	}

	var N = arr.length,
		out,
		j,
		tmp;

	if ( copy ) {
		out = arr.slice();
	} else {
		out = arr;
	}

	// Note: we skip the first element, as no further swaps are possible given that all other indices are excluded from swapping...
	for ( var i = N - 1; i > 0; i-- ) {
		// Generate an integer index on the interval: [0,i]
		j = Math.floor( Math.random() * (i+1) );

		// Swap elements:
		tmp = out[ i ];
		out[ i ] = out[ j ];
		out[ j ] = tmp;
	}

	return out;
} // end FUNCTION shuffle()


// EXPORTS //

module.exports = shuffle;
