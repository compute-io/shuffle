'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	shuffle = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-shuffle', function tests() {

	it( 'should export a function', function test() {
		expect( shuffle ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided an array', function test() {
		var values = [
				'5',
				5,
				null,
				undefined,
				true,
				NaN,
				{},
				function(){}
			];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				shuffle( value );
			};
		}
	});


	it( 'should throw an error if provided a copy argument which is not a boolean', function test() {
		var values = [
			'5',
			5,
			function(){},
			undefined,
			null,
			NaN,
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				shuffle( [1,2,3,4,5], value );
			};
		}
	});

	it( 'should generate unbiased permutations without mutating input array', function test() {
		var d = [ 0, 1, 2, 3 ],
			N = d.length,
			results = {},
			total,
			copy,
			res,
			keys,
			key,
			mu,
			delta;

		// This test will take a while...
		this.timeout( 5000 );

		// Record each permutation...
		for ( var i = 0; i < 1e6; i++ ) {
			copy = d.slice();
			res = shuffle( copy, false );
			key = res.join( '' );
			if ( !results.hasOwnProperty( key ) ) {
				results[ key ] = 0;
			}
			results[ key ] += 1;
		}

		// Ensure all permutations reached...

		total = 1;
		for ( var j = N; j > 0; j-- ) {
			total *= j;
		}

		keys = Object.keys( results );
		assert.strictEqual( keys.length, total );

		// Ensure that the sampling is unbiased...

		mu = 0;
		for ( var k = 0; k < keys.length; k++ ) {
			key = keys[ k ];
			delta = results[ key ] - mu;
			mu += delta / ( k+1 );
		}

		for ( var n = 0; n < keys.length; n++ ) {
			assert.closeTo( results[ key ], mu, 1e3 );
		}
	});

	it( 'should generate unbiased permutations mutating input array', function test() {
		var d = [ 0, 1, 2, 3 ],
			N = d.length,
			results = {},
			total,
			copy,
			keys,
			key,
			mu,
			delta;

		// This test will take a while...
		this.timeout( 5000 );

		// Record each permutation...
		for ( var i = 0; i < 1e6; i++ ) {
			copy = d.slice();
			shuffle( copy );
			key = copy.join( '' );
			if ( !results.hasOwnProperty( key ) ) {
				results[ key ] = 0;
			}
			results[ key ] += 1;
		}

		// Ensure all permutations reached...

		total = 1;
		for ( var j = N; j > 0; j-- ) {
			total *= j;
		}

		keys = Object.keys( results );
		assert.strictEqual( keys.length, total );

		// Ensure that the sampling is unbiased...

		mu = 0;
		for ( var k = 0; k < keys.length; k++ ) {
			key = keys[ k ];
			delta = results[ key ] - mu;
			mu += delta / ( k+1 );
		}

		for ( var n = 0; n < keys.length; n++ ) {
			assert.closeTo( results[ key ], mu, 1e3 );
		}
	});

});
