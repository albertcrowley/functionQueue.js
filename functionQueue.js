var functionQueue = {
	_theQueue: {},
	
	queue: function ( key, fn, delay) {
		if ( ! (key in functionQueue._theQueue)) {
			if (functionQueue.debug) { console.log ("queueing " + key + " for " + delay); }
			functionQueue._theQueue[key] = { 'key': key, 'fn': fn, 'delay': delay };
			
			setTimeout (function() {functionQueue.call(key); } , delay);
		}	else {
			if (functionQueue.debug) {console.log (key + " already in the queue");}
		}
	},
	
	call: function( key ) {
		if (functionQueue.debug) {console.log ("called!");}
		functionQueue._theQueue[key]['fn'].call();
		delete (functionQueue._theQueue[key]); 
		if (functionQueue.debug) { console.log (key + " deleted."); }
	},
	
	_debug: false
	
}
