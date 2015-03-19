this.react = {};
this.react.List = React.createClass({
  render: function() {
    var items = [];
    for (var i = 0; i < this.props.items.length; i++) {
      items.push(
        React.createElement('div', { className: 'row', key: 'item' + i },
          React.createElement('div', { className: 'col-md-12 test-data' },
            React.createElement('span', {}, this.props.items[i])
          )
        )
      );
    }
    return React.createElement('div', null, items);
  }
});