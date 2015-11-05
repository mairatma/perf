'use strict';

this.ReactTestCases = { // jshint ignore:line
	FirstRender: {
		name: 'React',
		beforeEach: function(element) {
			element.innerHTML = '';
		},
		test: function(element, data, callback) {
			React.render(React.createElement(react.List, data.config), element);
			callback();
		}
	},

	Update: {
		name: 'React',
		before: function(element, data) {
			this.list = React.render(React.createElement(react.List, data.config), element);
		},
		test: function(element, data, callback) {
			this.list.setState({
				items: this.list.state.items === data.items2 ? data.config.items : data.items2
			});
			callback();
		}
	},

	Decorate: {
		name: 'React',
		before: function(element, data) {
			element.innerHTML = metal.SoyTemplates.get('List', 'content')({
				id: 'react-list',
				items: data.config.items
			});
		},
		test: function(element, data, callback) {
			React.render(React.createElement(react.List, data.config), element);
			callback();
		}
	}
};
