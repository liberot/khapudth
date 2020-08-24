let PixiCacua = function( messageQueue, model, view ) {
	
	this.messageQueue = messageQueue;
	this.model = model;
	this.view = view;
	
	this.init = function () {

		this.messageQueue.register ( new Event( 'Model.UPDATED' ), this, 'update' );
		this.messageQueue.notify ( new Event( 'PixiCacua.INITED', { date: new Date() } ) );
	}

	this.update = function ( event ) {

		document.write( this.view.replace( '{var2nd}', event.title ) ); 
		
		console.log( '>>> update(): ', event );
	}
}
