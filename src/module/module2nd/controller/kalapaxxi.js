let Kalapaxxi = function( messageQueue, model, view ) {

	this.messageQueue = messageQueue;
	this.model = model;
	this.view = view;
	
	this.init = function () {

		this.messageQueue.register ( new Event( 'Model.UPDATED' ), this, 'update' );
		this.messageQueue.notify ( new Event( 'Kalapaxxi.INITED', { date: new Date() } ) );	
	}

	this.update = function ( event ) {
		
		document.write( this.view.replace( '{var1st}', '491' ) ); 
		console.log( '>>> update(): ', event );
	}
}
