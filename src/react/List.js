this.react = this.react || {};
this.react.List = React.createClass({
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
