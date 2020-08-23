// View
let Kalapaxxi = function( messageQueue, model ) {

	this.messageQueue = messageQueue;
	this.model = model;
	
	this.init = function () {

		this.messageQueue.register ( new Event( 'Model.UPDATED' ), this, 'update' );
		this.messageQueue.notify ( new Event( 'Kalapaxxi.INITED', { date: new Date() } ) );	
		
		this.draw();
	}

	this.draw = function () {
		
		document.write('<div>Kalapaxxi</div>');
	}
	
	this.update = function ( event ) {
		
		console.log( '>>> update(): ', event );
	}
}
