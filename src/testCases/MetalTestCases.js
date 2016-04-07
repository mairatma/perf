'use strict';

this.MetalTestCases = { // jshint ignore:line
	FirstRender: {
		name: 'Metal.js',
		beforeEach: function() {
			this.list && this.list.dispose();
			this.list = null;
		},
		test: function(element, data, callback) {
			this.list = new metalNamed.List.List(data.config, element);
			callback();
		}
	},

	Update: {
		name: 'Metal.js',
		before: function(element, data) {
			this.list = new metalNamed.List.List(data.config, element);
		},
		test: function(element, data, callback) {
			this.list.items = this.list.items === data.items2 ? data.config.items : data.items2;
			this.list.once('stateSynced', function() {
				callback();
			});
		}
	},

	Decorate: {
		name: 'Metal.js',
		before: function(element, data) {
			IncrementalDOM.patch(element, function() {
				metalNamed.List.List.TEMPLATE({items: data.config.items});
			});
		},
		beforeEach: function(element, data) {
			if (this.list) {
				this.list.dispose();
				this.list = null;
				this.before(element, data);
			}
		},
		test: function(element, data, callback) {
			this.list = new metalNamed.List.List({
				element: element.childNodes[0],
				items: data.config.items
			});
			callback();
		}
	}
};
