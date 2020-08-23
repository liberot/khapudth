// View 
let MainView = function( messageQueue, model ) {
	
	this.__proto__ = __AbstractView__;
	
	this.messageQueue = messageQueue;
	this.model = model;
	
	this.init = function () {
	
		this.messageQueue.notify ( new Event( 'Main.INITED', { date: new Date() } ) );
	}

	this.sync = function () {

		this.messageQueue.notify ( new Event( 'Model.UPDATED', { data: [] } ) );
	}

	this.update = function ( event ) {
		
		console.log( '>>> update(): ', event );
	}
}