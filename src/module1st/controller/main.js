let Main = function( messageQueue, model, view ) {
	
	this.__proto__ = __AbstractController__;
	
	this.messageQueue = messageQueue;
	this.model = model;
	this.view = view;
	
	this.init = function () {
	
		this.messageQueue.notify ( new Event( 'MainController.INITED', { date: new Date() } ) );
		this.draw();
	}

	this.sync = function () {

		this.messageQueue.notify ( new Event( 'Model.UPDATED', { data: [] } ) );
	}

	this.update = function ( event ) {
		
		console.log( '>>> update(): ', event );
	}

	this.draw = function () {

		document.write( this.view.replace( '{var1st}', '491' ) ); 
	}
}