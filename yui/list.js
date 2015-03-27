'use strict'

YUI.add('TestList', function(Y) {
	Y.TestList = Y.Base.create('list', Y.Widget, [], {
		renderUI: function() {
			this._uiSetItems();
		},

		bindUI: function() {
			this.after('itemsChange', Y.bind(this._uiSetItems, this));
		},

		_uiSetItems: function() {
			var items = this.get('items');
			var contentBox = this.get('contentBox');
			contentBox.empty();
			for (var i = 0; i < items.length; i++) {
				contentBox.append(
					'<div class="row"><div class="col-md-12"><span>' + items[i] +
					'</span></div></div>'
				);
			}
		}
	}, {
		ATTRS: {
			items: {
				value: []
			}
		}
	});
}, '1.0', {"requires": ["base-build", "node", "widget"]});