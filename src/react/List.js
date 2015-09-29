'use strict';

this.react = this.react || {}; // jshint ignore:line
this.react.List = React.createClass({ // jshint ignore:line
	getInitialState: function () {
		return { items: this.props.items };
	},

	render: function() {
		var items = [];
		for (var i = 0; i < this.state.items.length; i++) {
			items.push(
				React.createElement('div', { className: 'row', key: 'item' + i },
					React.createElement('div', { className: 'col-md-12' },
						React.createElement('span', {}, this.state.items[i])
					)
				)
			);
		}
		return React.createElement('div', null, items);
	}
});
