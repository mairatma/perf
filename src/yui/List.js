'use strict';

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
		},

    HTML_PARSER: {
      items: function(srcNode) {
      	var items = [];
      	var itemNodes = srcNode.all('.row span');
      	itemNodes.each(function(node) {
      		items.push(node.get('text'));
      	});
      	return items;
      }
    }
	});
}, '1.0', {'requires': ['base-build', 'node', 'widget']});
