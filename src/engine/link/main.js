 
let Deeplink = function () {

	this.evalLink = function () {
		
		this.log( window.location.hash.substr( 1 ) );		
	}

	this.setLink = function ( chunk ) {

		let lnk = '';
			lnk = window.location.href.substr( 1 );
		
		if (lnk.match( /\/+$/ ) ){
			chunk = chunk.replace( /^\//, '' );
		}
		
		window.location.hash = chunk;
	}

	this.log = function () {

		console.log ( 'link: ', arguments[ 0 ] ); 
	}
}



 