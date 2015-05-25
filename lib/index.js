'use strict';

// MODULES //

var isArray = require( 'validate.io-array' );

// SHUFFLE //

/**
* FUNCTION: shuffle( arr )
*	Mutates an input `array` to generate a random permutation of `array` elements.
*
* @param {Array} arr - `array` to shuffle
*/
function shuffle( arr ) {
	if ( !isArray( arr ) ) {
		throw new TypeError( 'shuffle()::invalid input argument. Must provide an array. Value: `' + arr + '`.' );
	}
	var N = arr.length,
		j,
		tmp;

	// Note: we skip the first element, as no further swaps are possible given that all other indices are excluded from swapping...
	for ( var i = N - 1; i > 0; i-- ) {
		// Generate an integer index on the interval: [0,i]
		j = Math.floor( Math.random() * (i+1) );

		// Swap elements:
		tmp = arr[ i ];
		arr[ i ] = arr[ j ];
		arr[ j ] = tmp;
	}
} // end FUNCTION shuffle()


// EXPORTS //

module.exports = shuffle;
