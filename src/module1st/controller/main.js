let Main = function( messageQueue, model, view ) {
	
	this.__proto__ = __AbstractController__;
	
	this.messageQueue = messageQueue;
	this.model = model;
	this.view = view;
	
	this.init = function () {
	
		this.draw();
		this.messageQueue.notify ( new Event( 'MainController.INITED', { date: new Date() } ) );
	}

	this.sync = function () {

		//.... 
		this.messageQueue.notify ( new Event( 'Model.UPDATED', { data: [] } ) );
	}

	this.draw = function () {

		document.write( this.view.replace( '{var1st}', '491' ) ); 
	}
}