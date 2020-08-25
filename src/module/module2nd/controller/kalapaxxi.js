let Kalapaxxi = function( messageQueue, model, link, view ) {

	this.messageQueue = messageQueue;
	this.model = model;
	this.view = view;
	this.link = link;
	
	this.init = function () {

		this.messageQueue.register ( new Subscription( 'Model.UPDATED', this, 'update' ));
		this.messageQueue.register ( new Subscription( 'Lunk.SET', this, 'logTheDeeplink' ));
		this.messageQueue.notify ( new Event( 'Kalapaxxi.INITED', { date: new Date() } ) );	
	}

	this.update = function ( event ) {
		
		this.model.var1st = '491';
		this.model.var2nd = 'The Continious Spirit of Zwagazhul Allmighty';

		// template variable vs. model variable fertauschi
		// ..{variable}..... -> this.model.variable
		let vars = this.view.match(/\{(.{1,32}?)\}/g);
		for( var idx in vars ){
			let index = vars[ idx ];
			let title = vars[ idx ].replace( /[\{\}]/g, '' );
			let value = this.model[ title ];
			if( null != value ) {
				this.view = this.view.replace( index, value );
			}
		}

		document.write( this.view ); 
	}

	this.logTheDeeplink = function ( event ) {

		console.log( '>>> logTheDeeplink(): ', event.model );
	} 
}
