'use strict';

window.Update = {
	addToSuite(suite) {
		var items = [];
		for (var i = 0; i < 1000; i++) {
			items.push('Item ' + (i + 1));
		}
		var items2 = items.concat();
		items2[0] = 'New Item';

		var element;
		function createElement() {
			if (element && element.parentNode) {
				document.body.removeChild(element);
			}

			element = document.createElement('div');
			element.style.opacity = 0;
			document.body.appendChild(element);
		}

		var list;
		suite.add({
			name: 'Metal',
			defer: true,
			fn: function(deferred) {
				list.items = list.items === items2 ? items : items2;
				list.once('stateSynced', function() {
					deferred.resolve();
				});
			},
			onStart: function() {
				createElement();
				list = new metalNamed.List.List({items: items}, element);
			},
			onComplete: function() {
				list.dispose();
			}
		});

		suite.add({
			name: 'React',
			fn: function() {
				list.setState({
					items: list.state.items === items2 ? items : items2
				});
			},
			onStart: function() {
				createElement();
				list = React.render(React.createElement(react.List, {items: items}), element);
			}
		});

		suite.add({
			name: 'YUI',
			fn: function() {
				list.set('items', list.get('items') === items2 ? items : items2);
			},
			onStart: function() {
				createElement();
				list = new Y.List({items: items}).render(element);
			},
			onComplete: function() {
				list.destroy();
			}
		});

		return suite;
	}
};
