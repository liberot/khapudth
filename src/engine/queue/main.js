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
				subscription.target[subscription.callback] ( event ); 
			}
		}
	} 

	this.register = function ( event, target, callback ) {
		
		this.log( 'register: ', event );

		// ..brilliant....
		// ref raf 
		// this.unregister ( event, target, callback ); 
		
		let subscription = event;
			subscription.target = target;
			subscription.callback = callback;
		
		this.subscriptions.push ( subscription );
	}

	this.unregister = function ( event, target, callback ) {

		this.log( 'unregister: ', event );
		
		let tmp = [];
		for( let idx in this.subscriptions ) {
			let subscription = this.subscriptions[idx];
			if( event.title == subscription.title ) {
				if( target == subscription.target ) {
					if( callback == subscription.callback ) {
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
