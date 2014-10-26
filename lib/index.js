/**
*
*	COMPUTE: shuffle
*
*
*	DESCRIPTION:
*		- Shuffles array elements in place.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	// SHUFFLE //

	/**
	* FUNCTION: shuffle( arr )
	*	Mutates an input `array` to generate a random permutation of `array` elements.
	*
	* @param {Array} arr - `array` to shuffle
	*/
	function shuffle( arr ) {
		if ( !Array.isArray( arr ) ) {
			throw new TypeError( 'shuffle()::invalid input argument. Must provide an array.' );
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

})();