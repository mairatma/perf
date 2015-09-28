'use strict';

var ReactTestCases = {
	FirstRender: {
		name: 'React',
		beforeEach: function(element) {
			element.innerHTML = '';
		},
		test: function(element, data, callback) {
			React.render(React.createElement(react.List, data.config), element);
			callback();
		}
	}
};
