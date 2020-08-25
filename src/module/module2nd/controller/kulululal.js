let Kulululal = function( messageQueue, model, link, view ) {

	this.messageQueue = messageQueue;
	this.model = model;
	this.view = view;
	this.link = link;
	
	this.init = function () {

		this.messageQueue.register ( new Subscription( 'Model.UPDATED', this, 'update' ));
		this.messageQueue.notify ( new Event( 'Kulululal.INITED', { date: new Date() } ) );	
	}

	this.update = function ( event ) {
			
	}	
}
