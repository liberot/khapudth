// View 
let AbstractView = function( messageQueue, model ) {
	
	this.messageQueue = messageQueue;
	this.model = model;
	this.views = [];

	this.addViews = function ( views ) {

		for( var idx in views ) { 
			views[ idx ].init();
			this.views.push( views [ idx ] );
		}
	}

	this.removeViews = function ( views ) {
		
		// oh mann bist du schlecht...
		let tmp = [];
		for( var idx in this.views ) { 
			let found = false;
			for ( var iidx in views ) {
				if ( this.views[ idx ] == views[ iidx ] ) {
					found = true;
					let target = this.views[ idx ];
						// boahhghh... 
						target.messageQueue.unregisterAllSubscriptions( target );
					continue;
				}
			}
			if(false == found){
				tmp.push( this.views [ idx ] );
			}
		}
		
		this.views = tmp;
	}
}

let __AbstractView__ = new AbstractView();


