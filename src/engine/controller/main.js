let Main = function( messageQueue, model, link, view ) {
	
	this.__proto__ = __AbstractController__;
	
	this.messageQueue = messageQueue;
	this.model = model;
	this.view = view;
	this.link = link;
	
	this.init = function () {
	
		this.messageQueue.register ( new Event( 'Model.UPDATED' ), this, 'update' );
		
		this.messageQueue.notify ( 
			new Event( 'MainController.INITED', { 
				link: this.link.get(),
				date: new Date() 
			} ) 
		);
	}

	this.sync = function () {

		//.... syncs model from some source...
		// this.model = result.model; 
		this.messageQueue.notify ( new Event( 'Model.UPDATED', { data: [], date: new Date() } ) );
	}

	this.update = function ( event ) {
		
		// event.model...
		//....
		this.setLink ( '/location/of/an/entry' ); 
	}

	this.setLink = function( loc ) {

		this.link.set( loc );
		this.messageQueue.notify ( new Event( 'Link.SET', { link: loc } ) );
	}
}