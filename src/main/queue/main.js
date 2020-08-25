let Subscription = function ( title, target, method ) {
	
	this.title = title;
	this.target = target;
	this.method = method;
}

let Event = function ( title, model ) {

	this.title = title;
	this.model = model;
}

let MessageQueue = function () {
	
	this.subscriptions = [];

	this.notify = function ( event ) {
		this.log( 'notify: ', event );
		
		for( let idx in this.subscriptions ) {
			let subscription = this.subscriptions[idx];
			if( event.title == subscription.title ) {
				subscription.target[ subscription.method ] ( event ); 
			}
		}
	} 

	this.register = function ( subscription ) {
		
		this.log( 'register: ', subscription );

		// ..brilliant....
		// ref raf 
		// this.unregister ( subscription ); 
		
		this.subscriptions.push ( subscription );
	}

	this.unregister = function ( subscription ) {

		this.log( 'unregister: ', event );
		
		let tmp = [];
		for( let idx in this.subscriptions ) {
			let sub = this.subscriptions[idx];
			if( subscription.title == sub.title ) {
				if( subscription.target == sub.target ) {
					if( subscription.method == sub.method ) {
						continue;
					}
				}
			}

			tmp.push( subscription );	
		}

		this.subscriptions = tmp;
	}

	this.unregisterAllSubscriptions = function ( target ) {

		let tmp = [];
		for( let idx in this.subscriptions ) {
			let subscription = this.subscriptions[idx];
			if( target == subscription.target ) {
					continue;
			}
			tmp.push( subscription );	
		}
		this.subscriptions = tmp;
	}
	
	this.log = function () {
		console.log( 'queue: ', arguments ); 
	}
}
