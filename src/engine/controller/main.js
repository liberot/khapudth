let Main = function( messageQueue, model, view ) {
	
	this.__proto__ = __AbstractController__;
	
	this.messageQueue = messageQueue;
	this.model = model;
	this.view = view;
	
	this.init = function () {
	
		this.messageQueue.register ( new Event( 'Model.UPDATED' ), this, 'update' );
		this.messageQueue.notify ( new Event( 'MainController.INITED', { date: new Date() } ) );
	}

	this.sync = function () {

		//.... syncs model from some ...
		// this.model = result.model; 
		this.messageQueue.notify ( new Event( 'Model.UPDATED', { data: [] } ) );
	}

	this.update = function () {

		// document.write( this.view.replace( '{var1st}', '491' ) ); 
	}
}