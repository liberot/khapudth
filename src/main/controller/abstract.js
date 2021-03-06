let AbstractController = function( messageQueue, model, link, view ) {
	
	this.modules = [];

	this.addModule = function ( modules ) {

		for( var idx in modules ) { 
			modules[ idx ].init();
			this.modules.push( modules [ idx ] );
		}
	}

	this.removeModule = function ( modules ) {
		
		let tmp = [];
		for( var idx in this.modules ) { 
			let found = false;
			for ( var iidx in modules ) {
				if ( this.modules[ idx ] == modules[ iidx ] ) {
					found = true;
					let target = this.modules[ idx ];
						target.messageQueue.unregisterAllSubscriptions( target );
					
					continue;
				}
			}
			if(false == found){
				tmp.push( this.modules [ idx ] );
			}
		}
		
		this.modules = tmp;
	}
}

let __AbstractController__ = new AbstractController();


