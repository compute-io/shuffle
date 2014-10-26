var shuffle = require( './../lib' );

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