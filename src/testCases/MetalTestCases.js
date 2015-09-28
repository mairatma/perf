'use strict';

var MetalTestCases = {
	FirstRender: {
		name: 'Metal.js',
		beforeEach: function(element) {
			this.list && this.list.dispose();
			this.list = null;
		},
		test: function(element, data, callback) {
			this.list = new metal.List(data.config).render(element);
			callback();
		}
	}
};
