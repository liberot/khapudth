// View
let Kulululal = function( messageQueue, model ) {

	this.messageQueue = messageQueue;
	this.model = model;
	
	this.init = function () {

		this.messageQueue.register ( new Event( 'Model.UPDATED' ), this, 'update' );
		this.messageQueue.notify ( new Event( 'Kulululal.INITED', { date: new Date() } ) );	
	}

	this.update = function ( event ) {
			
		console.log( '>>> update(): ', event );
		this.draw( event );
	}

	this.draw = function () {
	
		document.write( '<div>Kulululal: ' +arguments[0].title +'</div>');
	}	
}
