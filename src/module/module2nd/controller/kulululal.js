let Kulululal = function( messageQueue, model, view ) {

	this.messageQueue = messageQueue;
	this.model = model;
	this.view = view;
	
	this.init = function () {

		this.messageQueue.register ( new Event( 'Model.UPDATED' ), this, 'update' );
		this.messageQueue.notify ( new Event( 'Kulululal.INITED', { date: new Date() } ) );	
	}

	this.update = function ( event ) {
			
		console.log( '>>> update(): ', event );
	}	
}
