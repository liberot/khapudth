let PixiCacua = function( messageQueue, model, view ) {
	
	this.messageQueue = messageQueue;
	this.model = model;
	this.view = view;
	
	this.init = function () {

		this.messageQueue.register ( new Event( 'Model.UPDATED' ), this, 'update' );
		this.messageQueue.notify ( new Event( 'PixiCacua.INITED', { date: new Date() } ) );
	}

	this.draw = function () {
		
		document.write( this.view.replace( '{var1st}', '491' ) ); 
	}

	this.update = function ( event ) {

		console.log( '>>> update(): ', event );
		this.draw( event );
	}
}
