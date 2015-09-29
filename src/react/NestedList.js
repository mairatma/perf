'use strict';

this.react = this.react || {}; // jshint ignore:line
this.react.NestedList = React.createClass({ // jshint ignore:line
	getInitialState: function () {
		return { items: this.props.items };
	},

	render: function() {
		var items = [];
		for (var i = 0; i < this.state.items.length; i++) {
			items.push(React.createElement(
				react.NestedListItem,
				{
					key: 'item' + i,
					text: this.state.items[i]
				}
			));
		}
		return React.createElement('div', null, items);
	}
});

this.react.NestedListItem = React.createClass({ // jshint ignore:line
	render: function() {
		return React.createElement('div', {className: 'row'},
			React.createElement('div', {className: 'col-md-12' },
				React.createElement('span', {}, this.props.text)
			)
		);
	}
});
