let PixiCacua = function( messageQueue, model ) {
	
	this.messageQueue = messageQueue;
	this.model = model;
	
	this.init = function () {

		this.messageQueue.register ( new Event( 'Model.UPDATED' ), this, 'update' );
		this.messageQueue.notify ( new Event( 'PixiCacua.INITED', { date: new Date() } ) );
	}

	this.draw = function () {
	
		document.write( '<div>PixiCacua: ' +arguments[0].title +'</div>');
	}

	this.update = function ( event ) {

		console.log( '>>> update(): ', event );
		this.draw( event );
	}
}
