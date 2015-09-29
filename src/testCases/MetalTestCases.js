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
	},

	Update: {
		name: 'Metal.js',
		before: function(element, data) {
			this.list = new metal.List(data.config).render(element);
		},
		test: function(element, data, callback) {
			this.list.items = this.list.items === data.items2 ? data.config.items : data.items2;
			this.list.once('attrsChanged', function() {
				callback();
			});
		}
	}
};
