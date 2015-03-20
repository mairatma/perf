this.react = {};

this.react.NestedList = React.createClass({
  getInitialState: function () {
    return { items: this.props.items };
  },

  render: function() {
    var items = [];
    for (var i = 0; i < this.state.items.length; i++) {
      items.push(React.createElement(
        react.NestedListItem,
        {
          label: this.state.items[i].label,
          key: 'item' + i
        }
      ));
    }
    return React.createElement('div', null, items);
  }
});

this.react.NestedListItem = React.createClass({
  render: function() {
    return React.createElement('div', {className: 'row', onClick: this.handleClick },
      React.createElement('div', {className: 'col-md-12 test-data' },
        React.createElement('span', {}, this.props.label)
      )
    );
  }
});