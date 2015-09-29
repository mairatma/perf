'use strict';

this.MetalTestCases = { // jshint ignore:line
	FirstRender: {
		name: 'Metal.js',
		beforeEach: function() {
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
	},

	Decorate: {
		name: 'Metal.js',
		before: function(element, data) {
			element.innerHTML = metal.ComponentRegistry.Templates.List.content({
				id: 'metal-list',
				items: data.config.items
			})
		},
		beforeEach: function(element, data) {
			if (this.list) {
				this.list.dispose();
				this.list = null;
				this.before(element, data);
			}
		},
		test: function(element, data, callback) {
			this.list = new metal.List({
				element: '#metal-list',
				items: data.config.items
			}).decorate();
			callback();
		}
	}
};
