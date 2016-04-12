'use strict';

window.FirstRender = {
	addToSuite(suite) {
		var data = {items: []};
		for (var i = 0; i < 1000; i++) {
			data.items.push('Item ' + (i + 1));
		}

		var element;
		function createElement() {
			if (element && element.parentNode) {
				document.body.removeChild(element);
			}
			element = document.createElement('div');
			element.style.opacity = 0;
			document.body.appendChild(element);
		}

		suite.add({
			name: 'Metal',
			fn: function() {
				createElement();
				new metalNamed.List.List(data, element);
			}
		});

		suite.add({
			name: 'React',
			fn: function() {
				createElement();
				React.render(React.createElement(react.List, data), element);
			}
		});

		suite.add({
			name: 'YUI',
			fn: function() {
				createElement();
				new Y.List(data).render(element);
			}
		});
		return suite;
	}
};
