'use strict';

this.MetalPerf = { // jshint ignore:line
	run(suite) {
		suite
			.on('start', function(event) {
				document.querySelector('#' + event.target.name).textContent = 'Running';
			})
			.on('cycle', function(event) {
				var text = String(event.target).substr(event.target.name.length + 3);
				document.querySelector('#' + event.target.name).textContent = text;
			})
			.on('complete', function() {
				var result = document.querySelector('#result');
				result.textContent = 'Fastest: ' + this.filter('fastest').map('name');
				metal.dom.removeClasses(result, 'hidden');
			})
			.run({async: true});
	}
};
