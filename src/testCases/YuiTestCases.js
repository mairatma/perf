'use strict';

this.YuiTestCases = { // jshint ignore:line
	FirstRender: {
		name: 'YUI',
		before: function() {
			this.Y = YUI({ useSync: true }).use('List');
		},
		beforeEach: function() {
			this.list && this.list.destroy();
			this.list = null;
		},
		test: function(element, data, callback) {
			this.list = new this.Y.List(data.config).render(element);
			callback();
		}
	},

	Update: {
		name: 'YUI',
		before: function(element, data) {
			var instance = this;
			YUI().use(['List'], function(Y) {
				instance.list = new Y.List(data.config).render(element);
			});
		},
		test: function(element, data, callback) {
			this.list.set('items', this.list.items === data.items2 ? data.config.items : data.items2);
			callback();
		}
	},

	Decorate: {
		name: 'YUI',
		before: function(element, data) {
			this.Y = YUI({ useSync: true }).use('List');
			element.innerHTML = metal.ComponentRegistry.Templates.List.content({
				id: 'yui-list',
				items: data.config.items
			});
		},
		beforeEach: function(element, data) {
			if (this.list) {
				this.list.destroy();
				this.list = null;
				element.innerHTML = metal.ComponentRegistry.Templates.List.content({
					id: 'yui-list',
					items: data.config.items
				});
			}
		},
		test: function(element, data, callback) {
			this.list = new this.Y.List({
				contentBox: '#yui-list',
				items: data.config.items
			}).render();
			callback();
		}
	}
};
