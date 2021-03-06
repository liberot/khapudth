let PixiCacua = function( messageQueue, model, link, view ) {
	
	this.messageQueue = messageQueue;
	this.model = model;
	this.view = view;
	this.link = link;
	
	this.init = function () {

		this.messageQueue.register ( new Subscription( 'Model.UPDATED', this, 'update' ));
		this.messageQueue.notify ( new Event( 'PixiCacua.INITED', { date: new Date() } ) );
	}

	this.update = function ( event ) {

		document.write( this.view.replace( '{var2nd}', event.title ) ); 
	}
}
