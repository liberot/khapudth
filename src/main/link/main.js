 let Deeplink = function () {

	this.get = function () {
		
		return ( window.location.hash.substr( 1 ) );		
	}

	this.set = function ( chunk ) {

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



 